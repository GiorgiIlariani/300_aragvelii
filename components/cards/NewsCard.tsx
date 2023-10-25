import Image from "next/image";
import Link from "next/link";
import DeleteNews from "../forms/DeleteNews";
import { currentUser } from "@clerk/nextjs";
import { formatDateString } from "@/utils";

interface Props {
  title: string;
  content: string;
  id: string;
  images: string[];
  createdAt: string;
}

const NewsCard = async ({ title, content, id, images, createdAt }: Props) => {
  const user = await currentUser();

  const email = user?.emailAddresses.map((item) => item.emailAddress);

  return (
    <div className="w-full bg-[#0f1724] py-3 px-5 md:pb-10 rounded-2xl relative">
      <div className="flex items-center gap-6 py-5 lg:flex-col lg:gap-8 lg:pb-12">
        <Link href={`/news/${id}`}>
          <Image
            src={images[0]}
            alt="news image"
            width={384}
            height={216}
            className="w-[384px] h-[216px] object-cover"
          />
        </Link>
        <div className="flex flex-col gap-[15px]">
          <h4 className="text-light-1 text-lg">{title}</h4>
          <p className="max-w-[700px] text-light-1 text-base">{`${content.substring(
            0,
            200
          )}...`}</p>
          <div className="mt-10">
            <span className="text-gray-1 font-semibold text-base xs:text-sm">
              {formatDateString(createdAt) + "წ."}
            </span>
          </div>
        </div>
      </div>
      {email?.[0] === "lmaisuradze3333@gmail.com" ? (
        <div className="absolute bottom-6 right-6">
          <DeleteNews userId={id} />
        </div>
      ) : null}
    </div>
  );
};

export default NewsCard;
