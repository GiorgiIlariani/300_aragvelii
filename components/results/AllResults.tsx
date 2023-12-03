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
    <div className="w-full min-h-screen px-4 flex gap-6 py-10">
      {results.map((resultCard) => (
        <ResultCard key={resultCard.id} {...resultCard} />
      ))}
    </div>
  );
};

export default AllResults;
