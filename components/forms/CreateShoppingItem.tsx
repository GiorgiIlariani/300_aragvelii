"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
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

// select
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// radio buttons
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { shoppingItemValidation } from "@/lib/validations/shoppingItem";
import { shoppingItemsCategory } from "@/constants";
import AdditionalInformation from "../shared/AdditionalInformation";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { createShoppingCard } from "@/lib/actions/ShoppingCard.action";
import { usePathname, useRouter } from "next/navigation";

const CreateShoppingItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof shoppingItemValidation>>({
    resolver: zodResolver(shoppingItemValidation),
    defaultValues: {
      category: "",
      images: [],
      title: "",
      price: "",
      description: "",
      isOutOfStock: "In Stock",
    },
  });

  const onSubmit = async (values: z.infer<typeof shoppingItemValidation>) => {
    console.log(values);

    try {
      setIsLoading(true);

      await createShoppingCard({
        category: values.category,
        images: values.images,
        title: values.title,
        price: values.price,
        description: values.description,
        isOutOfStock: values.isOutOfStock,
        path: pathname,
      });

      router.push("/shop");
    } catch (error: any) {
      throw new Error(`error while create/update news: ${error.message}`);
    } finally {
      setIsLoading(false);
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
    <div className="max-w-[800px] mx-auto flex flex-col gap-10">
      <Form {...form}>
        <form
          className="flex flex-col justify-start gap-10"
          onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col gap-8 px-4 py-6 bg-[#0f1724] rounded-[15px]">
            <AdditionalInformation text="select the category and add information if item is in stock" />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-3">
                  <FormLabel className="font-semibold text-lg text-light-2">
                    Category
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="account-form_input no-focus">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-dark-3 py-4">
                      {shoppingItemsCategory.map((item) => (
                        <SelectItem
                          value={item}
                          key={item}
                          className="font-normal text-base text-light-2 cursor-pointer">
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* radio buttons */}
            <FormField
              control={form.control}
              name="isOutOfStock"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="font-semibold text-lg text-light-2">
                    Is Item In Stock?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={"In Stock"}
                      className="flex flex-col gap-2">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="In Stock" />
                        </FormControl>
                        <FormLabel className="font-normal text-base text-light-2">
                          In Stock
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Is Out Of Stock" />
                        </FormControl>
                        <FormLabel className="font-normal text-base text-light-2">
                          Is Out Of Stock
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex flex-col gap-8 px-4 py-6 bg-[#0f1724] rounded-[15px] mt-10">
            <AdditionalInformation text="Add as many images as you want, try to be suitable with categories" />
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
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-3">
                  <FormLabel className="font-normal text-lg text-light-2">
                    Title
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
          </div>
          <div className="w-full flex flex-col gap-8 px-4 py-6 bg-[#0f1724] rounded-[15px] mt-10">
            <AdditionalInformation text="add suitable prize and description for mor views and clients" />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-3">
                  <FormLabel className="font-normal text-lg text-light-2">
                    ფასი
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
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
              name="description"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-3">
                  <FormLabel className="font-normal text-[20px] text-light-2">
                    აღწერა
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      className="account-form_input no-focus"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="bg-primary-500 text-light-1 text-xl tracking-wider">
            {isLoading ? "adding..." : "add"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateShoppingItem;
