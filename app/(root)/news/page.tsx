import PageTitle from "@/components/shared/PageTitle";
import React, { Suspense } from "react";
import Loading from "./loading";
import LatestNews from "@/components/news/LatestNews";
import AllNews from "@/components/news/AllNews";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = searchParams.page ? +searchParams.page : 1;

  return (
    <div className="max-w-[1300px] mx-auto min-h-screen pb-20">
      <PageTitle title="Latest News" />
      <Suspense fallback={<Loading loadingLatestNews />}>
        <LatestNews />
      </Suspense>
      <PageTitle title="News" />
      <Suspense fallback={<Loading loadingAllNews />}>
        <AllNews page={page} />
      </Suspense>
    </div>
  );
}

export default Page;
