import { TopbarConstants } from "@/constants";
import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  UserButton,
  currentUser,
} from "@clerk/nextjs";
import { Skeleton } from "@mui/material";
import { fetchUser } from "@/lib/actions/user.actions";
import { BiMoon } from "react-icons/bi";

const Topbar = async () => {
  const user = await currentUser();

  let pubgUsername = "";

  if (user) {
    const userData = await fetchUser(user.id);
    pubgUsername = userData?.pubgUsername;
  }

  return (
    <div className="flex items-center h-[70px] justify-between px-6 xs:px-3 max-w-[1300px] mx-auto">
      <div className="flex flex-row gap-3 xs:gap-2 items-center w-full">
        {TopbarConstants.map((item) => (
          <Link
            className={`w-8 h-8 rounded-full bg-white flex justify-center items-center cursor-pointer ${
              item.id === 5 ? "xs:hidden" : ""
            } ${item.id === 4 ? "2xs:hidden" : ""}`}
            href={item.href}
            target="_blank"
            key={item.id}>
            {item.icon}
          </Link>
        ))}
        <span className="hidden xs:block text-light-1 text-[16px]">...</span>
      </div>
      <div className="flex gap-8 xs:gap-4 items-center">
        <div className="cursor-pointer text-white text-[18px]">
          <BiMoon />
        </div>
        {!user && (
          <SignInButton>
            <button
              className="bg-[#0f1724] flex items-center justify-center px-6 py-2 rounded-[4px] text-light-1"
              type="button">
              შესვლა
            </button>
          </SignInButton>
        )}
        <SignedIn>
          {/* <button
            className="bg-[#0f1724] flex items-center gap-2 px-4 py-2 rounded-[4px]"
            type="button"> */}
          <div className="flex items-center gap-3">
            <ClerkLoading>
              <Skeleton variant="circular" width={32} height={32} />
            </ClerkLoading>
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
            <h3 className="text-light-1">{pubgUsername}</h3>
          </div>
          {/* </button> */}
        </SignedIn>
      </div>
    </div>
  );
};

export default Topbar;
