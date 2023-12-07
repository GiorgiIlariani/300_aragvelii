import { fetchAllShoppingItems } from "@/lib/actions/ShoppingCard.actions";
import React from "react";
import ShoppingCard from "../cards/ShoppingCard";

const ShoppingItems = async ({
  category,
}: {
  category: string | string[] | undefined;
}) => {
  const allShoppingItems = await fetchAllShoppingItems(category);

  return (
    <div className="w-full px-4 grid grid-cols-3 gap-4">
      {allShoppingItems.map((item) => (
        <ShoppingCard
          key={item._id}
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
