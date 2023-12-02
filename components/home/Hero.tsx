"use client";

import React from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div className="w-full flex gap-20">
      <div className="h-full">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LGmBzh-2YfI"
          controls
          width={917}
          height={540}
        />
      </div>
      <div className="flex flex-col justify-between">
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
          height={170}
        />
      </div>
    </div>
  );
};

export default Hero;
