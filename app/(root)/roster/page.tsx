import PageTitle from "@/components/shared/PageTitle";
import React, { Suspense } from "react";
import Loading from "./loading";
import Roster from "@/components/cards/Roster";

const Page = async () => {
  return (
    <div className="max-w-[1300px] mx-auto min-h-screen">
      <PageTitle title="Our Roster" />
      <Suspense fallback={<Loading />}>
        <Roster />
      </Suspense>
    </div>
  );
};

export default Page;
