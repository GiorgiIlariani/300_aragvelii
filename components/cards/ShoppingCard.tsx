import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteShoppingCard from "./DeleteShoppingCard";

interface ShoppingCardProps {
  id: string;
  image: string;
  price: string;
  title: string;
  isOutOfStock: string;
}

const ShoppingCard = ({
  id,
  image,
  price,
  title,
  isOutOfStock,
}: ShoppingCardProps) => {
  return (
    <Link
      href={`/shop/${id}`}
      className="cursor-pointer bg-[#0f1724] rounded-[16px] p-2 relative">
      <div className="h-full flex flex-col gap-[10px] items-center justify-between">
        {/*  */}
        <div className="flex flex-col gap-[10px] items-center">
          <Image
            src={image}
            alt={title}
            width={240}
            height={135}
            className="w-[240px] h-[135px] object-contain"
          />

          <h4 className="text-light-1 font-normal text-xl text-center">
            {title}
          </h4>
        </div>
        {/*  */}
        <div className="w-full flex flex-col gap-[10px] items-center">
          <hr className="border border-[#1a4468] w-full" />
          <div className="w-full flex justify-between items-center px-2">
            <span className="text-light-1 font-semibold text-base">
              {price}₾
            </span>
            <>
              {isOutOfStock === "In Stock" ? (
                <p className="text-[#5AFF5A]">In Stock</p>
              ) : (
                <p className="text-[#FF5A5A]">Is Out Of Stock</p>
              )}
            </>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShoppingCard;
