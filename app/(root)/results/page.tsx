import PageTitle from "@/components/shared/PageTitle";
import { fetchResults } from "@/lib/actions/result.action";
import React, { Suspense } from "react";
import Loading from "./loading";
import AllResults from "@/components/results/AllResults";

const Page = async () => {
  const results = await fetchResults();

  console.log(results);

  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen">
      <PageTitle title="Results" />
      <Suspense fallback={<Loading />}>
        <AllResults results={results} />
      </Suspense>
    </div>
  );
};

export default Page;
