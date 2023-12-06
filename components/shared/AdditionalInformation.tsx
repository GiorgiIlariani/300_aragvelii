import additionalImg from "@/public/assets/additionalInformation.svg";
import Image from "next/image";

const AdditionalInformation = ({ text }: { text: string }) => {
  return (
    <div className="w-full rounded-2xl px-4 py-2 flex items-center bg-dark-3 gap-4 my-5">
      <div className="w-10 h-10 rounded-full flex justify-center items-center">
        <Image src={additionalImg} alt="info header img" />
      </div>
      <div className="text-sm font-semibold text-light-1">{text}</div>
    </div>
  );
};

export default AdditionalInformation;
