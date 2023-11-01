import Image from "next/image";
import Link from "next/link";
import DeleteNews from "./DeleteNews";
import { currentUser } from "@clerk/nextjs";
import { formatDateString } from "@/utils";
import EditNews from "./EditNews";

interface Props {
  title: string;
  content: string;
  id: string;
  images: string[];
  createdAt: string;
  isLatestNews: boolean;
}

const NewsCard = async ({
  title,
  content,
  id,
  images,
  createdAt,
  isLatestNews,
}: Props) => {
  const user = await currentUser();
  const email = user?.emailAddresses.map((item) => item.emailAddress);

  return (
    <div
      className={`w-full bg-[#0f1724] py-3 ${
        !isLatestNews && "pb-12"
      } px-5 rounded-2xl relative`}>
      <div
        className={`flex ${
          !isLatestNews && "flex-col"
        } gap-6 py-5 lg:flex-col items-center lg:gap-8`}>
        <Link href={`/news/${id}`}>
          <Image
            src={images[0]}
            alt="news image"
            width={384}
            height={216}
            className="w-[384px] h-[216px] object-cover"
          />
        </Link>
        <div className="flex flex-col gap-5">
          <h4 className="text-light-1 text-xl font-semibold">{`${title.substring(
            0,
            40
          )} ...}`}</h4>
          <p className="max-w-[700px] text-light-1 text-base font-normal">{`${content.substring(
            0,
            200
          )} ...}`}</p>
          <div
            className={`${
              !isLatestNews ? "absolute bottom-6 left-6" : "mt-20 lg:mt-10"
            }`}>
            <span className="text-gray-1 font-semibold text-base xs:text-sm">
              {formatDateString(createdAt) + "წ."}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center absolute bottom-6 right-6">
        {email?.[0] === "lmaisuradze3333@gmail.com" ? (
          <DeleteNews newsId={id} />
        ) : null}
        {email?.[0] === "lmaisuradze3333@gmail.com" ? (
          <EditNews newsId={id} />
        ) : null}
      </div>
    </div>
  );
};

export default NewsCard;
