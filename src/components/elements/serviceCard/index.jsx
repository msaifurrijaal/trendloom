import React from "react";

const ServiceCard = (props) => {
  const { title, desc, icon } = props;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-2">
      <div className="py-4 px-4 flex">
        {icon}
        <div className="ms-4">
          <p className="font-bold text-base text-dark mb-1">{title}</p>
          <p className="font-normal text-base text-secondary">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
