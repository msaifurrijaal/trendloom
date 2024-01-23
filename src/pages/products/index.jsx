import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCat } from "../../services/product.service";
import Navbar from "../../components/layouts/Navbar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../../components/layouts/Footer";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All Category");

  useEffect(() => {
    getProducts((response) => {
      if (response.success) {
        setProducts(response.data);
      } else {
        alert(`Error: ${response.error}`);
      }
    });
  }, []);

  const handleAllProduct = () => {
    getProducts((response) => {
      if (response.success) {
        setProducts(response.data);
      } else {
        alert(`Error: ${response.error}`);
      }
    });
    setCategory("All Category");
  };

  const handleProductByCat = (cat, title) => {
    getProductsByCat(cat, (response) => {
      if (response.success) {
        setProducts(response.data);
      } else {
        alert(`Error: ${response.error}`);
      }
    });
    setCategory(title);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container flex flex-wrap py-t">
        <div className="w-full sm:w-1/4 px-4 lg:px-0  border-dark">
          <h1 className="text-2xl lg:text-6xl font-semibold">Category</h1>
          <div className="mt-6 flex flex-col">
            <a
              onClick={() => handleAllProduct()}
              className="text-2xl mb-4 hover:underline cursor-pointer"
            >
              All
            </a>
            <a
              onClick={() =>
                handleProductByCat("men's%20clothing", "Men's Clothing")
              }
              className="text-2xl mb-4 hover:underline cursor-pointer"
            >
              Men's Clothing
            </a>
            <a
              onClick={() =>
                handleProductByCat("women's%20clothing", "Women's Clothing")
              }
              className="text-2xl mb-4 hover:underline cursor-pointer"
            >
              Women's Clothing
            </a>
            <a
              onClick={() => handleProductByCat("jewelery", "Jewelery")}
              className="text-2xl mb-4 hover:underline cursor-pointer"
            >
              Jewelery
            </a>
            <a
              onClick={() => handleProductByCat("electronics", "Electronics")}
              className="text-2xl mb-4 hover:underline cursor-pointer"
            >
              Electronics
            </a>
          </div>
        </div>
        <div className="w-full sm:w-3/4 px-4 lg:px-0 pb-28">
          <MainContent
            title={category}
            products={products}
            classname="pt-12 pb-2 text-center"
            countSkel={12}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
