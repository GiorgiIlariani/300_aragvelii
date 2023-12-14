"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { deleteShoppingCard } from "@/lib/actions/ShoppingCard.actions";

const DeleteShoppingCard = ({ id }: { id: string }) => {
  const path = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = async () => {
    try {
      await deleteShoppingCard(id, path);

      toast.success("Shopping Item was deleted", {
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
    <button
      style={{
        width: "28px",
        height: "28px",
        color: "#e66b6b",
        cursor: "pointer",
        transition: "all 0.3s linear",
        scale: isHovered ? "1.1" : "1",
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FaTrash />
    </button>
  );
};

export default DeleteShoppingCard;
