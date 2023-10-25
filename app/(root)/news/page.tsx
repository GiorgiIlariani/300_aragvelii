import NewsCard from "@/components/cards/NewsCard";
import PageTitle from "@/components/shared/PageTitle";
import { fetchAllNews } from "@/lib/actions/news.actions";
import { Skeleton } from "@mui/material";
import React, { Suspense } from "react";

const Page = async () => {
  const news = await fetchAllNews();

  console.log(news);

  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen pb-20">
      <PageTitle title="Latest News" />

      {/* no news found */}

      {news?.length === 0 && (
        <div className="w-full flex justify-center items-center mt-[150px]">
          <div className="text-light-1 mt-20 text-4xl">No News Found!</div>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-5 px-6">
        {news?.map((item) => (
          <NewsCard
            key={item?._id}
            title={item?.title}
            content={item?.content}
            images={item?.images}
            createdAt={item?.createdAt}
            id={item?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
