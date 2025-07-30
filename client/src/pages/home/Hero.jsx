import React from "react";
import useProgressiveImg from "../../hooks/image/useProgressiveImg";

function Hero() {
  const [src, { blur }] = useProgressiveImg(
    "/images/home-banner/home-compressed.webp",
    "/images/home-banner/home.webp"
  );

  return (
    <section className="relative overflow-hidden lg:flex h-[30vh] sm:h-[30vh] lg:h-screen lg:items-center">
      <div className="z-10 absolute mx-auto max-w-screen-xl lg:px-24 px-4 sm:px-6 top-[50%] -translate-y-[50%]">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-bold md:text-5xl text-white">
            Crop
            <strong className="font-bold text-gray-950">Connect</strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-gray-50">
            Connecting Farmers and Consumers - Bringing Fresh Produce to Your
            Doorstep!
          </p>
        </div>
      </div>
      <div
        className="relative w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 128, 128, 0.85), rgba(0, 0, 255, 0.25)), url(${src})`,
          filter: blur ? "blur(20px)" : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}

export default Hero;
