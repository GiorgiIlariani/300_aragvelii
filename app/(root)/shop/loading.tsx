import { Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <div className="w-full pb-10 pl-4 lg:pl-2 grid grid-cols-3 xl:grid-cols-2 shoppingScreen:flex shoppingScreen:flex-col gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <Skeleton
          key={item}
          variant="rectangular"
          sx={{
            bgcolor: "#0f1724",
            borderRadius: "16px",
            minHeight: "263px",
          }}
        />
      ))}
    </div>
  );
};

export default Loading;
