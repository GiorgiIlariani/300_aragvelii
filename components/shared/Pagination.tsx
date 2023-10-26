"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "../ui/button";

interface Props {
  pageNumber: number;
  isNext: boolean;
  path: string;
}

function Pagination({ pageNumber, isNext, path }: Props) {
  const router = useRouter();

  const handleNavigation = (type: string) => {
    let nextPageNumber = pageNumber;

    if (type === "prev") {
      nextPageNumber = Math.max(1, pageNumber - 1);
    } else if (type === "next") {
      nextPageNumber = pageNumber + 1;
    }

    // if (nextPageNumber > 1) {
    //   router.push(`/${path}?page=${nextPageNumber}`);
    // } else {
    //   router.push(`/${path}`);
    // }
  };

  if (!isNext && pageNumber === 1) return null;

  return (
    <div className="pagination">
      <Button
        onClick={() => handleNavigation("prev")}
        disabled={pageNumber === 1}
        className="text-light-2 cursor-pointer border border-[#0f1724] min-w-[40px] py-[10px] bg-transparent rounded-[4px]">
        Prev
      </Button>
      {Array.from({ length: pageNumber }).map((_, index) => (
        <Button
          key={index}
          type="button"
          className="text-light-2 cursor-pointer border border-[#0f1724] min-w-[40px] py-[10px] bg-transparent rounded-[4px]">
          {index + 1}
        </Button>
      ))}

      <Button
        onClick={() => handleNavigation("next")}
        disabled={!isNext}
        className="text-light-2 cursor-pointer border border-[#0f1724] min-w-[40px] py-[10px] bg-transparent rounded-[4px]">
        Next
      </Button>
    </div>
  );
}

export default Pagination;
