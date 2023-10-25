"use client";

import { calculateWidth } from "@/utils";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const YoutubeVideoPlayer = ({ url }: { url: string }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Add an event listener to update the windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [width, height] = calculateWidth(windowWidth);

  return (
    <div className="mt-20">
      <ReactPlayer url={url} controls width={width} height={height} />
    </div>
  );
};

export default YoutubeVideoPlayer;
