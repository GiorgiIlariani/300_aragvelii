import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  title: string;
  prizepool: string;
  date: string;
  createdAt: Date;
};

const ResultCard = ({ image, title, prizepool, date, createdAt }: Props) => {
  return (
    <Link
      href={``}
      className="w-full max-h-[323px] rounded-xl text-white cursor-pointer group transition-all">
      <div className="flex flex-col justify-center w-full">
        <div className="relative overflow-hidden w-full">
          <Image
            src={image}
            alt={title}
            className="object-cover rounded-md group-hover:scale-110 transition duration-300 w-full h-[221px]"
            width={390}
            height={221}
          />
          <div className="absolute w-full bg-[#0f1724b3] backdrop-blur-[3px] left-0 bottom-0 p-[10px]">
            {title}
          </div>
        </div>
        <div className="w-full p-[10px] flex flex-col gap-4 bg-[#0f1724]">
          <div className="flex items-center justify-between">
            <h4 className="text-light-1 font-semibold">Pubg Mobile</h4>
            <span className="text-green-600 text-[15px]">{prizepool}₾</span>
          </div>
          <hr className="bg-white" />
          <div className="flex items-center justify-between">
            <h3 className="text-white font-normal">
              {" "}
              {JSON.stringify(createdAt).slice(0, 20)}
            </h3>
            <span className="text-white font-normal">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
