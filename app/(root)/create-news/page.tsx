import CreateNews from "@/components/forms/CreateNews";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const Page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  const email = user?.emailAddresses.map((item) => item.emailAddress);

  if (email?.[0] !== "codemasterig@gmail.com") return null;

  return (
    <div className="max-w-[1300px] mx-auto pt-10 pb-[100px] px-4">
      <h1 className="text-light-1 text-3xl mb-10">Create news</h1>
      <CreateNews userId={userInfo?._id} username={user.username || ""} />
    </div>
  );
};

export default Page;
