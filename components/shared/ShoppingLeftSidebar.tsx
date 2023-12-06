import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { shoppingItemsCategory } from "@/constants";
import Link from "next/link";

const ShoppingLeftSidebar = () => {
  return (
    <div className="w-[280px] min-h-screen flex flex-col">
      <div className="flex items-center gap-2 rounded-[14px] p-3 bg-[#0f1724]">
        <input
          type="text"
          className="w-full bg-[#FFFFFF] rounded-[6px] border-none outline-none py-[3px] px-2"
        />
        <button>
          <SearchIcon
            style={{ fill: "#FFFFFF", cursor: "pointer" }}
            fontSize="medium"
          />
        </button>
      </div>
      <div className="mt-6 bg-[#0f1724] flex flex-col gap-3 p-5 rounded-[14px]">
        {shoppingItemsCategory.map((item) => (
          <Link
            href={`/shop?category=${item}`}
            key={item}
            className="text-light-1 text-[22px] font-normal uppercase px-4 py-2 cursor-pointer hover:bg-[#1a4468] rounded-[4px]">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShoppingLeftSidebar;
