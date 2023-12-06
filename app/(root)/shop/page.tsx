import PageTitle from "@/components/shared/PageTitle";
import ShoppingLeftSidebar from "@/components/shared/ShoppingLeftSidebar";
import { Suspense } from "react";
import Loading from "./loading";
import ShoppingItems from "@/components/shop/ShoppingItems";

async function Page() {
//   {
//   category,
// }: {
//   category: { [key: string]: string | undefined };
// }
  return (
    <div className="max-w-[1300px] mx-auto min-h-screen">
      <PageTitle title="Shop" />
      <div className="flex gap-4">
        <ShoppingLeftSidebar />
        <Suspense fallback={<Loading />}>
          <ShoppingItems />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
