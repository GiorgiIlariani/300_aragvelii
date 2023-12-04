import React from "react";
import ResultCard from "./ResultCard";

type Props = {
  results: {
    id: string;
    image: string;
    title: string;
    content: string;
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
          content={resultCard.content}
          date={resultCard.date}
          createdAt={resultCard.createdAt}
        />
      ))}
    </div>
  );
};

export default AllResults;
