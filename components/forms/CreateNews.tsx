"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { NewsValidation } from "@/lib/validations/news";
import {
  createNews,
  editNews,
  fetchEachNews,
} from "@/lib/actions/news.actions";
import { useSearchParams } from "next/navigation";
import { EditedNewsProps } from "@/types";

const CreateNews = ({
  userId,
  username,
}: {
  userId: string;
  username: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLaoding, setIsLaoding] = useState(false);
  const [editedNewsInfo, setEditedNewsInfo] = useState<EditedNewsProps>();
  const searchedNewsId = searchParams.get("news");

  const form = useForm<z.infer<typeof NewsValidation>>({
    resolver: zodResolver(NewsValidation),
    defaultValues: {
      images: editedNewsInfo?.images || [],
      title: editedNewsInfo?.title || "",
      content: editedNewsInfo?.content || "",
      url: editedNewsInfo?.url || "",
    },
  });

  useEffect(() => {
    const fetchEditedNewsData = async () => {
      const news = await fetchEachNews(searchedNewsId!);
      if (news) {
        setEditedNewsInfo(news[0]);
        form.reset(news[0]);
      }
    };
    fetchEditedNewsData();
  }, [form.reset]);

  const onSubmit = async (values: z.infer<typeof NewsValidation>) => {
    try {
      setIsLaoding(true);
      // await create new news
      if (!editedNewsInfo) {
        await createNews({
          images: values.images,
          id: userId,
          author: username,
          content: values.content,
          title: values.title,
          url: values.url,
          path: pathname,
        });
      }

      if (searchedNewsId) {
        await editNews({
          newsId: searchedNewsId,
          title: values.title,
          content: values.content,
          images: values.images,
          url: values.url,
        });
      }

      router.push("/news");
    } catch (error: any) {
      throw new Error(`error while create/update news: ${error.message}`);
    } finally {
      setIsLaoding(false);
    }
  };

  const handleImages = (
    e: ChangeEvent<HTMLInputElement>,
    field: any // Pass field as an argumen
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();
    const selectedFiles = e.target.files;

    if (!selectedFiles || selectedFiles.length === 0) {
      return;
    }

    const imagePromises: Promise<string>[] = [];

    // Create a copy of the existing images array
    const newImages = [...field.value];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];

      if (file.type.includes("image")) {
        const promise = new Promise<string>((resolve) => {
          fileReader.onload = (event) => {
            const imageDataUrl = event.target?.result?.toString() || "";
            resolve(imageDataUrl);
          };
          fileReader.readAsDataURL(file);
        });

        imagePromises.push(promise);
      }
    }

    Promise.all(imagePromises)
      .then((imageDataUrls) => {
        // Append new images to the existing array
        field.onChange([...newImages, ...imageDataUrls]);
      })
      .catch((error) => {
        console.error("Error reading image files:", error);
      });
  };

  const handleImageRemove = (index: number, field: any) => {
    // Create a copy of the current images array
    const newImages = [...field.value];
    // Remove the image at the specified index
    newImages.splice(index, 1);
    // Update the form field value with the updated images
    field.onChange(newImages);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}>
        {/* images */}
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4 space-y-0">
              {field.value.length > 0 &&
                field.value?.map((image, i) => (
                  <div className="relative w-[96px] h-[96px]">
                    <Image
                      key={i}
                      src={image}
                      alt="image"
                      width={96}
                      height={96}
                      priority
                      className="w-[96px] h-[96px] object-cover m-0"
                    />
                    <div className="absolute group inset-0 bg-black flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-80">
                      <div className="flex items-center gap-x-2">
                        <button
                          onClick={() => handleImageRemove(i, field)}
                          className="w-[48px] h-[48px] cursor-pointer group-hover:opacity-100 opacity-0 transition duration-300 ease-out flex justify-center items-center rounded-xl bg-[rgba(137,150,174,.4)]">
                          <Image
                            src="/assets/trash.svg"
                            alt="trash icon"
                            width={24}
                            height={24}
                            className="object-contain z-10 group-hover:opacity-100"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              {field.value.length === 0 && (
                <FormLabel className="create-news_image-label" />
              )}
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Add profile photo"
                  className="account-form_image-input"
                  onChange={(e) => handleImages(e, field)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="font-normal text-lg text-light-2">
                სათაური
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* content */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="font-normal text-[20px] text-light-2">
                აღწერა
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={20}
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* youtube video(url) */}
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="font-normal text-lg text-light-2">
                ვიდეოს ლინკი
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-primary-500 text-light-1 text-xl tracking-wider">
          {editedNewsInfo
            ? `${isLaoding ? "Editing..." : "Edit"}`
            : `${isLaoding ? "uplading..." : "upload"}`}
        </Button>
      </form>
    </Form>
  );
};

export default CreateNews;
