import PlayerDetails from "@/components/cards/PlayerDetails";
import DeleteWeeklyStatistic from "@/components/statistic/DeleteWeeklyStatistic";
import { Button } from "@/components/ui/button";
import {
  deletePlayerWeeklyDetails,
  fetchEachPlayer,
} from "@/lib/actions/roster.actions";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const player = await fetchEachPlayer(params.id);

  if (!player) return;

  const playerDetails = player?.[0];

  const { match, kills, survivalTime, damage } = playerDetails?.details;

  return (
    <div className="max-w-[1300px] mx-auto mt-10 min-h-screen flex gap-8">
      <PlayerDetails details={playerDetails} />
      <div className="flex flex-col">
        <div className="flex flex-col mt-10">
          <h4 className="text-light-1 text-4xl font-semibold">Statistics</h4>
          {/* weekly statistic */}
          <div className="flex flex-col items-start">
            <h5 className="text-light-1 text-lg underline cursor-pointer mt-2">
              Weekly
            </h5>
            <div className="text-light-1 text-base font-semibold mt-1">
              Matches: {match || 0}
            </div>
            <div className="text-light-1 text-base font-semibold mt-1">
              Kill: {kills || 0}
            </div>
            <div className="text-light-1 text-base font-semibold mt-1">
              KD: {kills === 0 || match === 0 ? 0 : (kills / match).toFixed(1)}
            </div>
            <div className="text-light-1 text-base font-semibold mt-1">
              Survival Time: {survivalTime || 0}
            </div>
            <div className="text-light-1 text-base font-semibold mt-1">
              avarage survival Time:{" "}
              {kills === 0 || match === 0
                ? 0
                : (survivalTime / match).toFixed(1)}
            </div>
            <div className="text-light-1 text-base font-semibold mt-1">
              Damage: {damage || 0}
            </div>
            <div className="text-light-1 text-base font-semibold mt-1">
              avarage damage:{" "}
              {kills === 0 || match === 0 ? 0 : (damage / match).toFixed(1)}
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-16 items-center">
          <Link href={`/statistic/${params.id}`}>
            <Button
              type="button"
              className="bg-primary-500 text-light-1 text-xl tracking-wider">
              Change Statistic
            </Button>
          </Link>
          <DeleteWeeklyStatistic playerId={params.id} />
        </div>
      </div>
    </div>
  );
};

export default Page;
