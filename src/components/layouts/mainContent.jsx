import React from "react";
import ProductCard from "../elements/productCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MainContent = (props) => {
  const { title, tagline, products } = props;
  return (
    <div className="container pt-12 pb-2 text-center">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-base mt-3">{tagline}</p>

      <div className="w-full px-4 mt-14 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        {products.length < 1
          ? [...Array(4)].map((_, index) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/4 px-3 sm:px-8 mb-8"
                key={index}
              >
                <Skeleton height="220px" />
                <Skeleton height="20px" className="mt-2" />
                <Skeleton height="10px" className="mt-2" />
              </div>
            ))
          : products.map((product) => (
              <ProductCard
                key={product.id}
                title={`${product.title.substring(0, 36)}...`}
                price={product.price}
                sourceImage={product.image}
                id={product.id}
              />
            ))}
      </div>
    </div>
  );
};

export default MainContent;
