import AddResultForm from "@/components/forms/AddResultForm";
import PageTitle from "@/components/shared/PageTitle";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const email = user?.emailAddresses.map((item) => item.emailAddress);

  if (email?.[0] !== "codemasterig@gmail.com") return null;
  return (
    <div className="max-w-[1300px] mx-auto min-h-screen mt-10 pb-[100px] px-4">
      <h1 className="text-light-1 text-3xl mb-10">Add result</h1>
      <AddResultForm userId={user.id} />
    </div>
  );
};

export default page;
