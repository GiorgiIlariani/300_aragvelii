import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen pb-20">
      <div className="w-full px-4 grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-col gap-[18px]">
        {[1, 2, 3, 4, 5, 6]?.map((item) => (
          <Skeleton
            key={item}
            variant="rectangular"
            height={323}
            sx={{
              bgcolor: "#0f1724",
              borderRadius: "12px",
              width: "100%",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
