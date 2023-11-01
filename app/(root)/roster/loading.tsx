import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-[1300px] mx-auto min-h-screen">
      <div className="w-full grid grid-cols-3 lg:grid-cols-2 md:flex md:flex-col gap-6 my-16 px-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <Skeleton
            key={item}
            variant="rectangular"
            sx={{
              bgcolor: "#0f1724",
              borderRadius: "12px",
              height: "500px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
