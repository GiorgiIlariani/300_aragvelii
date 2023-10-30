"use client";

import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { fetchEachNews } from "@/lib/actions/news.actions";

const EditNews = ({ newsId }: { newsId: string }) => {
  const path = usePathname();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = async () => {
    try {
      const news = await fetchEachNews(newsId);
      router.push(`/create-news?news=${newsId}`);
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <button
      style={{
        width: "28px",
        height: "28px",
        color: "#6be675",
        cursor: "pointer",
        transition: "all 0.3s linear",
        scale: isHovered ? "1.1" : "1",
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FaEdit />
    </button>
  );
};

export default EditNews;
