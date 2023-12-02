import Hero from "@/components/home/Hero";
import PageTitle from "@/components/shared/PageTitle";
import React, { Suspense } from "react";
import Loading from "./news/loading";
import AllNews from "@/components/news/AllNews";

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto min-h-screen py-20">
      <Hero />
      <PageTitle title="News" />
      <Suspense fallback={<Loading loadingAllNews />}>
        <AllNews page={1} isHomePage={true} />
      </Suspense>
    </div>
  );
};

export default Home;
