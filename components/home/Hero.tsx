"use client";

import React from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div className="w-full px-4 flex justify-between xl:flex-col xl:gap-y-8 xl:items-center">
      <div className="h-full">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LGmBzh-2YfI"
          controls
          width={917}
          height={540}
        />
      </div>
      <div className="flex flex-col xl:flex-row xl:w-[917px] xl:items-center justify-between">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=WEZ_i1Sgb_0"
          controls
          width={290}
          height={163}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=4arLZoMpn-o&t=22271s"
          controls
          width={290}
          height={163}
        />
        <ReactPlayer
          url="https://youtu.be/KZiYzwZtoBg?si=EigGuXl1z-DQuaDz"
          controls
          width={290}
          height={163}
        />
      </div>
    </div>
  );
};

export default Hero;
