import { fetchEachShoppingItem } from "@/lib/actions/ShoppingCard.actions";
import CarouselComponent from "@/components/carousel/CarouselComponent";
import { Button } from "@/components/ui/button";

const Page = async ({ params }: { params: { id: string } }) => {
  const shoppingCardDetails = await fetchEachShoppingItem(params.id);

  return (
    <div className="max-w-[1000px] mx-auto min-h-screen px-3 py-16">
      <div className="flex flex-col gap-8">
        <div className="w-full">
          <h4 className="text-light-1 text-lg">
            Shop / {shoppingCardDetails?.category} /{" "}
            {shoppingCardDetails?.title}
          </h4>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 items-start">
            <div className="rounded-[8px] py-[2px] px-2 bg-[#0f1724] text-light-1 uppercase">
              {shoppingCardDetails?.isOutOfStock}
            </div>
            <div className="w-[448px]">
              <CarouselComponent />
            </div>
          </div>
          {/* right side div */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-light-1 text-xl tracking-wide">
              {shoppingCardDetails?.title}
            </h4>
            <span className="text-light-1 text-2xl font-semibold">
              {shoppingCardDetails?.price} ₾
            </span>
            <div
              className="max-w-[328px] text-light-1 text-sm"
              style={{ whiteSpace: "pre-line" }}>
              {shoppingCardDetails?.description.split(", ").join(",\n")}
            </div>
            <Button className="w-full bg-primary-500 text-light-1 text-lg tracking-wider mt-8">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
