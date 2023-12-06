import PageTitle from "@/components/shared/PageTitle";
import { fetchCurrentResultDetails } from "@/lib/actions/result.action";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const currentResult = await fetchCurrentResultDetails(params.id);

  if (!currentResult) return;

  const { image, title, content, date, prizepool } = currentResult?.[0];

  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen">
      <PageTitle title="Result Details" />
    </div>
  );
};

export default Page;
