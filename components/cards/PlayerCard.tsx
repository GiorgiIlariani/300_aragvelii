import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  pubgId: string;
  pubgUsername: string;
  // socialIcons?: any[];
  fullName: string;
}

const PlayerCard = ({
  imgUrl,
  pubgId,
  pubgUsername,
  // socialIcons,
  fullName,
}: Props) => {
  return (
    <Link href={`roster/${pubgUsername}`}>
      <div className="px-8 sm:px-4 py-8 bg-[#0f1724] rounded-xl flex flex-col items-center cursor-pointer">
        <Image
          src={imgUrl}
          alt={pubgUsername}
          width={250}
          height={300}
          className="object-cover rounded-sm w-full h-[300px] lg:h-[350px]"
        />
        <div className="w-full flex flex-col items-start gap-2 mt-6">
          <h4 className="text-light-1 font-bold text-2xl">{fullName}</h4>
          <h4 className="text-light-1 font-semibold text-xl">{pubgUsername}</h4>
          <p className="text-light-3 text-xl font-normal">{pubgId}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;