import { fetchAllLatestNews } from "@/lib/actions/news.actions";
import { Skeleton } from "@mui/material";
import React from "react";

interface Props {
  loadingLatestNews?: boolean;
  loadingAllNews?: boolean;
}

const Loading = async ({ loadingLatestNews, loadingAllNews }: Props) => {
  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen pb-20">
      {loadingLatestNews ? (
        <div className="w-full flex flex-col gap-14 px-5">
          {[1, 2, 3]?.map((item) => (
            <Skeleton
              key={item}
              variant="rectangular"
              height={280}
              sx={{
                bgcolor: "#0f1724",
                borderRadius: "16px",
                width: "100%",
              }}
            />
          ))}
        </div>
      ) : null}
      {loadingAllNews ? (
        <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-6 px-5">
          {[1, 2, 3, 4, 5, 6]?.map((item) => (
            <Skeleton
              key={item}
              variant="rectangular"
              height={280}
              sx={{
                bgcolor: "#0f1724",
                borderRadius: "16px",
                width: "100%",
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Loading;
