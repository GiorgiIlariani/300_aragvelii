import PageTitle from "@/components/shared/PageTitle";
import ShoppingLeftSidebar from "@/components/shared/ShoppingLeftSidebar";
import { Suspense } from "react";
import Loading from "./loading";
import ShoppingItems from "@/components/shop/ShoppingItems";

function Page({
  // params,
  searchParams,
}: {
  // params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);

  const category = searchParams?.category;
  const search = searchParams?.search;

  return (
    <div className="max-w-[1300px] mx-auto min-h-screen">
      <PageTitle title="Shop" />
      <div className="flex gap-4 items-start px-4">
        <ShoppingLeftSidebar />
        <Suspense fallback={<Loading />}>
          <ShoppingItems category={category} search={search} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
