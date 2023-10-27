"use client";

import React from "react";
import { deleteNews } from "@/lib/actions/news.actions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

const DeleteNews = ({ userId }: { userId: string }) => {
  const path = usePathname();
  const handleClick = async () => {
    try {
      await deleteNews(userId, path);

      toast.success("News was deleted", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <Image
      src="/assets/delete.svg"
      alt="delete icon"
      width={24}
      height={24}
      className="cursor-pointer object-contain"
      onClick={handleClick}
    />
  );
};

export default DeleteNews;
