import NewsCard from "@/components/cards/NewsCard";
import PageTitle from "@/components/shared/PageTitle";
import { fetchAllLatestNews, fetchAllNews } from "@/lib/actions/news.actions";
import React, { Suspense } from "react";
import Loading from "@/components/loading";
import PaginationComponent from "@/components/shared/PaginationComponent";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  console.log(searchParams);

  const latestNews = await fetchAllLatestNews();
  const results = await fetchAllNews(
    searchParams.page ? +searchParams.page : 1,
    6
  );

  return (
    <div className="max-w-[1300px] mx-auto min-h-screen pb-20">
      <PageTitle title="Latest News" />

      {/* no news found */}

      {results?.allNews.length === 0 && (
        <div className="w-full flex justify-center items-center mt-[150px]">
          <div className="text-light-1 mt-20 text-4xl">No News Found!</div>
        </div>
      )}

      <Suspense fallback={<Loading />}>
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
      </Suspense>

      <PageTitle title="News" />
      <div
        className="mt-10 grid grid-cols-2 md:grid-cols-1 gap-6 px-6"
        id="breakpoints">
        {results?.allNews?.map((item) => (
          <NewsCard
            key={item?._id}
            title={item?.title}
            content={item?.content}
            images={item?.images}
            createdAt={item?.createdAt}
            id={item?._id}
            isLatestNews={false}
          />
        ))}
      </div>

      <PaginationComponent
        isNext={results?.isNextPage || false}
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        totalCounts={results?.totalNewsCount || 1}
        path="news"
      />
    </div>
  );
}

export default Page;
