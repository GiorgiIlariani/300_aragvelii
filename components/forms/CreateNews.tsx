"use client";

import * as z from "zod";
import Image from "next/image";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
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

import { useUploadThing } from "@/lib/uploadthing";
import { isBase64Image } from "@/utils";
import { NewsValidation } from "@/lib/validations/news";
import { createNews } from "@/lib/actions/news.actions";

const CreateNews = ({
  userId,
  username,
}: {
  userId: string;
  username: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLaoding, setIsLaoding] = useState(false);

  const form = useForm<z.infer<typeof NewsValidation>>({
    resolver: zodResolver(NewsValidation),
    defaultValues: {
      images: [],
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof NewsValidation>) => {
    try {
      setIsLaoding(true);
      // await create new news
      await createNews({
        images: values.images,
        id: userId,
        author: username,
        content: values.content,
        title: values.title,
        url: values.url,
        path: pathname,
      });

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
                field.value?.map((image) => (
                  <Image
                    src={image}
                    alt="image"
                    width={96}
                    height={96}
                    priority
                    className="w-[96px] h-[96px] object-cover m-0"
                  />
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
          {isLaoding ? "იტვირთება..." : "დამატება"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateNews;
