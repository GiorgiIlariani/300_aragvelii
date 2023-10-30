import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen">
      <div className="text-light-1 text-xl">{params.id}</div>
    </div>
  );
};

export default Page;
