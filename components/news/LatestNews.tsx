import React from "react";
import NewsCard from "../cards/NewsCard";
import { fetchAllLatestNews } from "@/lib/actions/news.actions";

const LatestNews = async () => {
  const latestNews = await fetchAllLatestNews();

  if (latestNews?.length === 0) {
    return (
      <div className="w-full flex justify-center items-center mt-[150px]">
        <div className="text-light-1 mt-20 text-4xl">No News Found!</div>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col gap-6 px-6">
      {latestNews?.map((item) => (
        <NewsCard
          key={item?._id}
          title={item?.title}
          content={item?.content}
          images={item?.images}
          createdAt={item?.createdAt}
          id={item?._id}
          isLatestNews
        />
      ))}
    </div>
  );
};

export default LatestNews;
