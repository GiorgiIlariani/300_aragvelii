import Hero from "@/components/home/Hero";
import PageTitle from "@/components/shared/PageTitle";
import React, { Suspense } from "react";
import NewsLoading from "./news/loading";
import ResultsLoading from "./results/loading";
import AllNews from "@/components/news/AllNews";
import AllResults from "@/components/results/AllResults";

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto min-h-screen py-20">
      <Hero />
      <PageTitle title="News" isHomePage />
      <Suspense fallback={<NewsLoading loadingAllNews />}>
        <AllNews page={1} isHomePage={true} />
      </Suspense>
      <PageTitle title="Results" isHomePage />
      <Suspense fallback={<ResultsLoading />}>
        <AllResults page={1} isHomePage />
      </Suspense>
    </div>
  );
};

export default Home;
