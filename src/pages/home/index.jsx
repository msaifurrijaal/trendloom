import React, { useEffect, useState } from "react";
import Navbar from "../../components/layouts/navbar";
import Hero from "../../components/layouts/hero";
import MainContent from "../../components/layouts/mainContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateLeft,
  faClock,
  faShield,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "../../components/elements/serviceCard";
import Button from "../../components/elements/button";
import Footer from "../../components/layouts/Footer";
import CampaignCard from "../../components/elements/campaignCard";
import { getLimitProducts, getProducts } from "../../services/product.service";

const HomePage = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    getLimitProducts(8, (response) => {
      if (response.success) {
        setNewProducts(response.data);
      } else {
        alert(`Error: ${response.error}`);
      }
    });

    getLimitProducts(4, (response) => {
      if (response.success) {
        setTopProducts(response.data);
      } else {
        alert(`Error: ${response.error}`);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <MainContent
        title="Discover NEW Arrivals"
        tagline="Recently added shirts!"
        products={newProducts}
        classname="container pt-12 pb-2 text-center"
      />
      <div className="container w-full px-4 flex flex-wrap justify-center lg:mt-10 lg:mb-20">
        <ServiceCard
          title="Free Shipping"
          desc="Enjoy free shipping on all orders above $100."
          icon={
            <FontAwesomeIcon
              icon={faTruckFast}
              style={{ color: "#1f4d7e" }}
              className="mt-2"
            />
          }
        />
        <ServiceCard
          title="SUPPORT 24/7"
          desc="Our support team is there to help you for queries"
          icon={
            <FontAwesomeIcon
              icon={faClock}
              style={{ color: "#1f4d7e" }}
              className="mt-2"
            />
          }
        />
        <ServiceCard
          title="30 DAYS RETURN"
          desc="Simply return it within 30 days for an exchange."
          icon={
            <FontAwesomeIcon
              icon={faArrowRotateLeft}
              style={{ color: "#1f4d7e" }}
              className="mt-2"
            />
          }
        />
        <ServiceCard
          title="100% PAYMENT SECURE"
          desc="Our payments are secured with 256 bit encryption"
          icon={
            <FontAwesomeIcon
              icon={faShield}
              style={{ color: "#1f4d7e" }}
              className="mt-2"
            />
          }
        />
      </div>
      <div className="container w-full px-4 flex flex-wrap justify-center mt-10 mb-6">
        <CampaignCard
          title="PEACE OF MIND"
          desc="A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind."
          btnText="Buy Now"
        />
        <CampaignCard
          title="BUY 2 GET 1 FREE"
          desc="End of season sale. Buy any 2 items of your choice and get 1 free."
          btnText="Buy Now"
        />
      </div>
      <MainContent
        title="Top Sellers"
        tagline="Browse our top-selling products"
        products={topProducts}
        classname="container pt-12 pb-2 text-center"
      />
      <div className="flex justify-center">
        <Button classname="bg-accent text-white">SHOP NOW</Button>
      </div>
      <Footer mt="mt-12" />
    </div>
  );
};

export default HomePage;
