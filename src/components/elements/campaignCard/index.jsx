import React from "react";
import Button from "../button";

const CampaignCard = (props) => {
  const { title, desc, btnText } = props;
  return (
    <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
      <div className=" flex justify-center items-center px-4 lg:px-32 py-20 bg-dark">
        <div className="text-center">
          <h1 className="text-4xl text-white">{title}</h1>
          <p className="text-base text-white mt-2">{desc}</p>
          <Button classname="mt-6 bg-white text-dark">{btnText}</Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
