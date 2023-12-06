import PageTitle from "@/components/shared/PageTitle";
import React, { Suspense } from "react";
import Loading from "./loading";
import AllResults from "@/components/results/AllResults";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = searchParams.page ? +searchParams.page : 1;

  return (
    <div className="max-w-[1300px] mx-auto min-h-screen relative">
      <PageTitle title="Results" />
      <Suspense fallback={<Loading />}>
        <AllResults page={page} />
      </Suspense>
    </div>
  );
}

export default Page;
