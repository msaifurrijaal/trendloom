import React, { useEffect, useState } from "react";
import Navbar from "../../components/layouts/navbar";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/product.service";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/elements/button";
import Footer from "../../components/layouts/Footer";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container flex flex-wrap py-6">
        <div className="w-full sm:w-2/5 px-4 lg:px-0 flex justify-center">
          {product ? (
            <img
              src={product.image}
              className="max-w-64 sm:max-w-full lg:max-w-sm"
            />
          ) : (
            <div className="w-full sm:w-2/5 px-4 lg:px-0">
              <Skeleton height="220px" />
            </div>
          )}
        </div>
        <div className="w-full mt-6 sm:mt-0 sm:w-3/5 px-4 lg:px-0 lg:ps-4">
          {product ? (
            <div>
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                {product.title}
              </h1>
              <div className="flex items-center mt-4">
                <FontAwesomeIcon
                  icon={faStar}
                  size="lg"
                  style={{ color: "#c97b48" }}
                />
                <p className="text-lg font-semibold ms-2">
                  {product.rating && product.rating.rate}
                </p>
                <p className="text-lg font-semibold ms-2">
                  ({product.rating && product.rating.count})
                </p>
              </div>
              <p className="text-lg md:text-2xl mt-4 text-accent">
                $ {product.price}
              </p>
              <p className="text-base mt-4">{product.description}</p>
              <Button classname="bg-accent text-white mt-6 lg:mt-12">
                ADD TO CART
              </Button>
              <p className="text-base mt-4">
                <span className="font-semibold">Category : </span>
                {product.category}
              </p>
            </div>
          ) : (
            <div>
              <Skeleton height="50px" className="mb-1" width="100%" />
              <Skeleton height="25px" className="mb-1" width="20%" />
              <Skeleton height="50px" className="mb-1" width="20%" />
              <Skeleton height="150px" className="mb-1" width="100%" />
              <Skeleton height="50px" className="mb-1" width="20%" />
              <Skeleton height="50px" className="mb-1" width="40%" />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProductPage;
