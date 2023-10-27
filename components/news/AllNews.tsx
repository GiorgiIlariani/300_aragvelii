import React from "react";
import NewsCard from "../cards/NewsCard";
import { fetchAllNews } from "@/lib/actions/news.actions";
import PaginationComponent from "../shared/PaginationComponent";

interface Props {
  page: number;
}

const AllNews = async ({ page }: Props) => {
  const results = await fetchAllNews(page, 6);

  return (
    <>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-1 gap-6 px-6">
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
        pageNumber={page}
        totalCounts={results?.totalNewsCount || 1}
        path="news"
      />
    </>
  );
};

export default AllNews;
