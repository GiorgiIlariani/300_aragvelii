import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen flex gap-8">
      <div className="flex flex-col gap-4 px-6 xs:px-4 sm:px-6 py-8">
        <Skeleton
          variant="rectangular"
          sx={{
            bgcolor: "#0f1724",
            borderRadius: "12px",
            height: "350px",
            width: "350px",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            bgcolor: "#0f1724",
            borderRadius: "12px",
            height: "32px",
            width: "203px",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            bgcolor: "#0f1724",
            borderRadius: "12px",
            height: "28px",
            width: "95px",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            bgcolor: "#0f1724",
            borderRadius: "12px",
            height: "28px",
            width: "121px",
          }}
        />
      </div>
      <div className="flex flex-col items-start mt-10">
        {/* statistic */}
        <div className="flex flex-col gap-[10px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Skeleton
              key={item}
              variant="text"
              sx={{
                bgcolor: "#0f1724",
                borderRadius: "12px",
                height: "30px",
                width: "250px",
              }}
            />
          ))}
        </div>
        {/* buttons */}
        <div className="flex gap-4 mt-16 items-center">
          <Skeleton
            variant="rectangular"
            sx={{
              bgcolor: "#0f1724",
              borderRadius: "6px",
              height: "40px",
              width: "200px",
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              bgcolor: "#0f1724",
              borderRadius: "6px",
              height: "40px",
              width: "200px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
