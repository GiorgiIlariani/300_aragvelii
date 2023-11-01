import React from "react";
import PlayerCard from "./PlayerCard";
import { fetchAllPlayer } from "@/lib/actions/roster.actions";

const Roster = async () => {
  const rosterData = await fetchAllPlayer();
  return (
    <div className="w-full grid grid-cols-3 lg:grid-cols-2 md:flex md:flex-col gap-6 my-16 px-6">
      {rosterData?.map((player) => {
        return (
          <PlayerCard
            key={player?._id}
            id={player?._id}
            imgUrl={player?.imgUrl}
            pubgId={player?.pubgId}
            pubgUsername={player?.pubgUsername}
            fullName={player?.fullName}
          />
        );
      })}
    </div>
  );
};

export default Roster;
