import { fetchAllLatestNews } from "@/lib/actions/news.actions";
import { Skeleton } from "@mui/material";
import React from "react";

const Loading = async () => {
  const news = await fetchAllLatestNews();
  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen pb-20">
      <div className="flex flex-col gap-6 px-5">
        {news?.map((item) => (
          <Skeleton
            key={item?._id}
            variant="rectangular"
            width={1252}
            height={280}
            sx={{ bgcolor: "#0f1724", borderRadius: "16px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
