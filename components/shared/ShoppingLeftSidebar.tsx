"use client";

import SearchIcon from "@mui/icons-material/Search";
import { shoppingItemsCategory } from "@/constants";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ShoppingLeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchedItem, setSearchedItem] = useState("");
  const searchParams = useSearchParams();
  const category = searchParams.get("category")?.toLowerCase();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    setSearchedItem(e.target.value.toLowerCase());

    // update as necessary
    const value = e.target.value;

    if (!value) {
      current.delete("search");
    } else {
      current.set("search", e.target.value);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  // console.log(searchedItem);
  // console.log(searchParams);

  console.log(searchParams);

  return (
    <div className="min-w-[270px] lg:min-w-[260px] flex flex-col">
      <div className="flex items-center gap-2 rounded-[14px] p-3 bg-[#0f1724]">
        <input
          type="text"
          className="w-full bg-[#FFFFFF] rounded-[6px] border-none outline-none py-[3px] px-2"
          value={searchedItem}
          onChange={handleInputChange}
        />
        <button>
          <SearchIcon
            style={{ fill: "#FFFFFF", cursor: "pointer" }}
            fontSize="medium"
          />
        </button>
      </div>
      <div className="mt-6 bg-[#0f1724] flex flex-col gap-3 p-5 rounded-[14px]">
        {shoppingItemsCategory.map((item) => {
          const shoppingItemPath = item.toLowerCase();

          const isActiveLink =
            shoppingItemPath === category ||
            shoppingItemPath.includes(category!);

          return (
            <Link
              href={`/shop?category=${item}`}
              key={item}
              className={`text-light-1 text-[22px] font-normal uppercase px-4 py-2 cursor-pointer hover:bg-[#1a4468] ${
                isActiveLink && "bg-[#1a4468]"
              }  rounded-[4px]`}>
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingLeftSidebar;
