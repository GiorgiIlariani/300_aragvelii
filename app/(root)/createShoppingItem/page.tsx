import CreateShoppingItem from "@/components/forms/CreateShoppingItem";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const Page = async () => {
  const user = await currentUser();

  const email = user?.emailAddresses.map((item) => item.emailAddress);
  if (email?.[0] !== "codemasterig@gmail.com") return null;

  return (
    <div className="max-w-[1300px] min-h-screen mx-auto pt-10 pb-[100px] px-4">
      <h1 className="text-light-1 text-3xl mb-10 text-center">
        Create Shopping Item
      </h1>
      <CreateShoppingItem />
    </div>
  );
};

export default Page;
