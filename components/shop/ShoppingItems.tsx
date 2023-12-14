import { fetchAllShoppingItems } from "@/lib/actions/ShoppingCard.actions";
import React from "react";
import ShoppingCard from "../cards/ShoppingCard";

const ShoppingItems = async ({
  category,
  search,
}: {
  category: string | string[] | undefined;
  search: string | string[] | undefined;
}) => {
  const allShoppingItems = await fetchAllShoppingItems(category, search);

  return (
    <div className="w-full pb-10 pl-4 lg:pl-2 grid grid-cols-3 xl:grid-cols-2 shoppingScreen:flex shoppingScreen:flex-col gap-4">
      {allShoppingItems?.map((item) => (
        <ShoppingCard
          key={item?._id}
          id={item?._id}
          image={item?.images[0]}
          price={item?.price}
          title={item?.title}
          isOutOfStock={item?.isOutOfStock}
        />
      ))}
    </div>
  );
};

export default ShoppingItems;
