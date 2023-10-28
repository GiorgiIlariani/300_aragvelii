import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-[1300px] mx-auto my-[100px] min-h-screen px-6">
      <Skeleton
        variant="rectangular"
        height={350}
        sx={{
          bgcolor: "#0f1724",
          borderRadius: "16px",
          width: "100%",
        }}
      />
      <Skeleton
        variant="rectangular"
        height={20}
        sx={{
          bgcolor: "#0f1724",
          borderRadius: "16px",
          width: "60%",
          margin: "auto",
          marginTop: "30px",
        }}
      />
      <Skeleton
        variant="rectangular"
        height={18}
        sx={{
          bgcolor: "#0f1724",
          borderRadius: "16px",
          width: "80%",
          margin: "auto",
          marginTop: "30px",
        }}
      />
      <Skeleton
        variant="rectangular"
        height={300}
        sx={{
          bgcolor: "#0f1724",
          borderRadius: "16px",
          minWidth: "350px",
          maxWidth: "500px",
          marginTop: "80px",
        }}
      />
    </div>
  );
};

export default Loading;
