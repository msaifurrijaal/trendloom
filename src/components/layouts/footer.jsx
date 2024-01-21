import React from "react";

const Footer = (props) => {
  const { mt = "" } = props;
  return (
    <footer className={`bg-slate-50 pt-14 ${mt}`} >
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full px-4 font-medium md:w-1/3">
            <h2 className="mb-5 text-4xl font-bold text-dark">TrendLoom</h2>
            <h3 className="mb-2 text-2xl font-bold">Contact Us</h3>
            <p>trendloom@gmail.com</p>
            <p>Malang, Indonesia</p>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-dark">Help Links</h3>
            <ul className="text-dark">
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Order Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-dark">
              Useful Links
            </h3>
            <ul className="text-dark">
              <li>
                <a
                  href="#home"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Advetising
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Term of use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
