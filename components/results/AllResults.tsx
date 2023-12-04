import React from "react";
import ResultCard from "../cards/ResultCard";

type Props = {
  results: {
    id: string;
    image: string;
    title: string;
    prizepool: string;
    date: string;
    createdAt: Date;
  }[];
};

const AllResults = ({ results }: Props) => {
  return (
    <div className="w-full px-4 grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-col gap-[18px] py-10">
      {results.map((resultCard) => (
        <ResultCard
          key={resultCard.id}
          image={resultCard.image}
          title={resultCard.title}
          prizepool={resultCard.prizepool}
          date={resultCard.date}
          createdAt={resultCard.createdAt}
        />
      ))}
    </div>
  );
};

export default AllResults;
