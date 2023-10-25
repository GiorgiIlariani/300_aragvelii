"use client";

import Image from "next/image";

interface Props {
  images: string[];
}

const NewsImageContainer = ({ images }: Props) => {
  return (
    <div className="flex sm:flex-col">
      {images?.map((image) => (
        <Image
          src={image}
          alt="news image"
          width={images.length === 1 ? 960 : 480}
          height={540}
          className={`object-cover h-[540px] ${
            images.length >= 2 ? "lg:h-[300px]" : "lg:h-[350px]"
          }  ${
            images.length >= 2
              ? "w-[480px] lg:w-[300px]"
              : "w-[960px] lg:w-[350px]"
          }`}
        />
      ))}
    </div>
  );
};

export default NewsImageContainer;
