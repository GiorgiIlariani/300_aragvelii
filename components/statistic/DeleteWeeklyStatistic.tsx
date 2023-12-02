"use client";

import React from "react";
import { Button } from "../ui/button";
import { deletePlayerWeeklyDetails } from "@/lib/actions/roster.actions";
import { usePathname } from "next/navigation";

const DeleteWeeklyStatistic = ({ playerId }: { playerId: string }) => {
  const path = usePathname();

  const handleDelete = async () => {
    console.log("this function should run");

    await deletePlayerWeeklyDetails(playerId, path);
  };
  return (
    <Button
      type="button"
      className="bg-[#e66b6b] text-light-1 text-xl tracking-wider"
      onClick={handleDelete}>
      Delete Statistic
    </Button>
  );
};

export default DeleteWeeklyStatistic;
