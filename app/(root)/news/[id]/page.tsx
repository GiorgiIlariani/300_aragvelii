import NewsImageContainer from "@/components/NewsImageContainer";
import YoutubeVideoPlayer from "@/components/YoutubeVideoPlayer";
import { fetchEachNews } from "@/lib/actions/news.actions";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const eachUserInfo = await fetchEachNews(params.id);

  const newsInfo = eachUserInfo?.[0];

  return (
    <div className="max-w-[1300px] mx-auto my-[100px] min-h-screen px-6">
      <div className="w-full flex flex-col justify-center items-center">
        <NewsImageContainer images={newsInfo?.images} />
        {/* <Image
            src={newsInfo?.images[0]}
            alt="news image"
            width={newsInfo?.images[1] ? 480 : 960}
            height={540}
            className={`${
              newsInfo?.images[1]
                ? "w-[480px] lg:w-[300px] sm:w-[200px]"
                : "w-[960px] lg:w-[]"
            } h-[540px] lg:h-[300px] object-cover`}
          />
          {newsInfo?.images[1] && (
            <Image
              src={newsInfo?.images[1]}
              alt="news image"
              width={480}
              height={540}
              className="w-[480px] lg:w-[300px] sm:w-[200px] h-[540px] lg:h-[300px] sm:h-[200px] object-cover"
            /> */}
        {/* )} */}

        <h1 className="text-[40px] sm:text-3xl xs:text-2xl 2xs:text-[22px] text-light-1 text-center my-7">
          {newsInfo?.title}
        </h1>
        <p className="text-base text-light-1 xs:text-sm">{newsInfo?.content}</p>
      </div>
      <YoutubeVideoPlayer url={newsInfo?.url} />
    </div>
  );
};

export default page;
