import React from "react";

const Hero = () => {
  return (
    <div
      className={`py-5 lg:py-40 bg-cover bg-center ${"bg-[url('/images/hero-bg.jpg')]"}`}
    >
      <div className="container px-8 py-24 flex flex-wrap">
        <h1 className="w-full self-center font-bold text-white text-4xl md:text-7xl lg:w-1/2">
          STYLIST PICKS BEAT THE HEAT
        </h1>
      </div>
    </div>
  );
};

export default Hero;
