import Image from "next/image";
import React from "react";

interface Props {
  details: {
    imgUrl: string;
    pubgUsername: string;
    fullName: string;
    pubgId: string;
  };
}

const PlayerDetails = ({ details }: Props) => {
  return (
    <div className="max-w-[500px] px-6 xs:px-4 sm:px-6 py-8 flex flex-col items-center cursor-pointer">
      <Image
        src={details?.imgUrl}
        alt={details?.pubgUsername}
        width={250}
        height={350}
        className="object-cover rounded-lg w-full h-[350px]"
      />
      <div className="w-full flex flex-col items-start gap-2 mt-6">
        <h4 className="text-light-1 font-bold text-2xl">{details?.fullName}</h4>
        <h4 className="text-light-1 font-semibold text-xl">
          {details?.pubgUsername}
        </h4>
        <p className="text-light-3 text-xl font-normal">{details?.pubgId}</p>
      </div>
    </div>
  );
};

export default PlayerDetails;
