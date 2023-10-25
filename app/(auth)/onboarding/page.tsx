import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  console.log(user.id);

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    name: userInfo?.name || user?.firstName,
    pubgId: userInfo?.pubgId || "",
    pubgUsername: userInfo?.pubgUsername || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20 xs:px-7">
      <h1 className="head-text">ინტეგრირება</h1>
      <p className="mt-3 text-base-regular text-light-1">
        შეავსე შენი პროფაილი ახლა და გამოიყენე 300 არაგველის გვერდი
      </p>

      <section className="mt-9 bg-dark-2 px-10 py-10 xs:px-7 2xs:px-5">
        <AccountProfile user={userData} />
      </section>
    </main>
  );
};

export default Page;
