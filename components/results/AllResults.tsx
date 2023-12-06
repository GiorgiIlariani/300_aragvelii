import React from "react";
import ResultCard from "../cards/ResultCard";
import { fetchResults } from "@/lib/actions/result.action";
import PaginationComponent from "../shared/PaginationComponent";

interface Props {
  page: number;
  isHomePage?: boolean;
}

const AllResults = async ({ page, isHomePage }: Props) => {
  const results = await fetchResults();

  return (
    <>
      <div className="w-full px-4 grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-col gap-[18px] pb-10">
        {results?.allResults?.map((resultCard) => (
          <ResultCard
            key={resultCard?.id}
            id={resultCard?._id}
            image={resultCard?.image}
            title={resultCard?.title}
            prizepool={resultCard?.prizepool}
            date={resultCard?.date}
            createdAt={resultCard?.createdAt}
          />
        ))}
      </div>
      <div className="absolute bottom-6 left-[calc(50%-90px)]">
        {!isHomePage && (
          <PaginationComponent
            path="results"
            pageNumber={page}
            totalCounts={results?.totalResultsCount || 1}
            isNext={results?.isNextPage || false}
          />
        )}
      </div>
    </>
  );
};

export default AllResults;
