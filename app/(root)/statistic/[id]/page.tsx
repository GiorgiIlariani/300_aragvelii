import React, { Suspense } from "react";
import PlayerDetails from "@/components/cards/PlayerDetails";
import ChangeStatistic from "@/components/forms/ChangeStatistic";
import PageTitle from "@/components/shared/PageTitle";
import { fetchEachPlayer } from "@/lib/actions/roster.actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const player = await fetchEachPlayer(params.id);

  const playerObjectDetails = player?.[0];

  return (
    <div className="max-w-[1300px] mx-auto min-h-screen">
      <PageTitle title="Change Statistic" />
      <Suspense
        fallback={
          <p className="text-light-1 font-bold text-3xl">Loading...</p>
        }>
        <div className="w-full flex items-start mt-10 px-6">
          <PlayerDetails details={playerObjectDetails} />
          <div className="flex-1 items-start mt-10 px-6">
            <ChangeStatistic playerId={player?.[0]?._id} />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
