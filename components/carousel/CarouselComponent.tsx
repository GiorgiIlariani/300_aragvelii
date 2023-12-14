"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}>
      <Image
        src="/assets/carouselImg.webp"
        alt="carouselImg"
        width={200}
        height={200}
        className="object-contain"
      />
      <Image
        src="/assets/carouselImg2.webp"
        alt="carouselImg2"
        width={200}
        height={200}
        className="object-contain"
      />
      <Image
        src="/assets/carouselImg3.webp"
        alt="carouselImg3"
        width={200}
        height={200}
        className="object-contain"
      />
      <Image
        src="/assets/carouselImg4.webp"
        alt="carouselImg4"
        width={200}
        height={200}
        className="object-contain"
      />
    </Carousel>
  );
};

export default CarouselComponent;
