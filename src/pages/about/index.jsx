import React from "react";
import Navbar from "../../components/layouts/navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div
        className={`py-24 lg:py-40 bg-cover bg-center ${"bg-[url('/images/about-bg.jpg')]"}`}
      >
        <div className="container px-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">ABOUT TRENDLOOM</h1>
        </div>
      </div>
      <h1 className="text-4xl font-semibold text-center mt-12">-- IN DEVELOPMENT --</h1>
    </>
  );
};

export default AboutPage;
