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
import { resultsValidation } from "@/lib/validations/result";
import { createResult } from "@/lib/actions/result.action";

const AddResultForm = ({ userId }: { userId: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLaoding, setIsLaoding] = useState(false);

  const form = useForm<z.infer<typeof resultsValidation>>({
    resolver: zodResolver(resultsValidation),
    defaultValues: {
      image: "",
      title: "",
      content: "",
      date: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof resultsValidation>) => {
    try {
      setIsLaoding(true);
      await createResult({
        id: userId,
        content: values.content,
        title: values.title,
        image: values.image,
        date: values.date,
        path: pathname,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLaoding(false);
    }

    router.push("results");
  };

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      if (event.target) {
        const imageDataUrl = event.target.result as string;
        fieldChange(imageDataUrl);
      }
    };

    if (e.target.files && e.target.files.length > 0) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleImageRemove = (field: any) => {
    // Update the form field value with an empty string to clear the image
    field.onChange("");
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}>
        {/* image */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4 space-y-0">
              {field.value ? (
                <div className="relative w-[96px] h-[96px]">
                  <Image
                    src={field.value}
                    alt="image"
                    width={96}
                    height={96}
                    priority
                    className="w-[96px] h-[96px] object-cover m-0"
                  />
                  <div className="absolute group inset-0 bg-black flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-80">
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => handleImageRemove(field)}
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
              ) : (
                <FormLabel className="create-news_image-label" />
              )}
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Add profile photo"
                  className="account-form_image-input"
                  onChange={(e) =>
                    handleImageChange(e, (value) => field.onChange(value))
                  }
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

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="font-normal text-lg text-light-2">
                თარიღი
              </FormLabel>
              <FormControl>
                <Input
                  type="date"
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
          {isLaoding ? "ემატება..." : "დამატება"}
        </Button>
      </form>
    </Form>
  );
};

export default AddResultForm;
