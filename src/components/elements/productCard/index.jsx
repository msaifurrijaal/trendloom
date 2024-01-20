import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { title, price, sourceImage, id } = props;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 px-3 sm:px-8 mb-4">
      <Link to={`/product/${id}`}>
        <div className="hover:scale-105 transition duration-200 h-full">
          <div className="flex justify-center items-center">
            <img
              src={sourceImage}
              alt=""
              className=" h-56 bg-cover bg-center"
            />
          </div>
          <div className="p-2 ">
            <h5 className="mb-1 text-base font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <p className=" text-sm  font-normal text-gray-700 ">$ {price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
