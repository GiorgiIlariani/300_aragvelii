"use client";

import { useEffect, useState } from "react";
import { fetchAllShoppingItems } from "@/lib/actions/ShoppingCard.actions";
import ShoppingCard from "../cards/ShoppingCard";
import { Skeleton } from "@mui/material";

interface ShoppingItem {
  _id: string;
  images: string[];
  price: string;
  title: string;
  isOutOfStock: string;
}

// ... (import statements)

const ShoppingItems = ({
  category,
  search,
}: {
  category: string | string[] | undefined;
  search: string | string[] | undefined;
}) => {
  const [loading, setLoading] = useState(true);
  const [allShoppingItems, setAllShoppingItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const items = await fetchAllShoppingItems(category, search);
        setAllShoppingItems(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, search]);

  let numberOfSkeletons = 9;

  return (
    <div className="w-full pb-10 pl-4 lg:pl-2 grid grid-cols-3 xl:grid-cols-2 shoppingScreen:flex shoppingScreen:flex-col gap-4">
      {loading
        ? Array.from({ length: numberOfSkeletons }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              sx={{
                bgcolor: "#0f1724",
                borderRadius: "16px",
                minHeight: "263px",
              }}
            />
          ))
        : allShoppingItems.map((item) => (
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
