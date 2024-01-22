import React from "react";
import Button from "../../components/elements/button";
import InputForm from "../../components/elements/input";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div
        className={`py-24 lg:py-40 bg-cover bg-center ${"bg-[url('/images/contact-bg.jpg')]"}`}
      >
        <div className="container px-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            CONTACT US
          </h1>
        </div>
      </div>
      <div className="container flex flex-wrap mt-12 md:mt-16 lg:mt-24">
        <div className="w-full md:w-2/3 px-4">
          <h1 className="text-4xl font-semibold">
            We would love to hear from you.
          </h1>
          <p className="text-base mt-10">
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>
          <div className="flex flex-wrap mt-10">
            <InputForm
              classname="sm:w-1/2 sm:pe-1"
              name="name"
              label="Name"
              type="text"
              placeholder="Please enter your name"
            />
            <InputForm
              classname="sm:w-1/2 sm:ps-1"
              name="email"
              label="Email"
              type="email"
              placeholder="Please enter your email"
            />
            <div className="w-full mt-4">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Please enter your message"
                className="h-32 w-full border border-secondary p-3 text-dark mt-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              ></textarea>
            </div>
            <Button classname="bg-accent text-white mt-6 lg:mt-12">
              SEND MESSAGE
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mt-6 lg:ps-8 lg:mt-0">
          <div>
            <h1 className="text-2xl font-semibold">Visit Us</h1>
            <p className="text-base mt-4">
              Malang, East Java, Indonesia.
              <br />
              Phone: +628539898987
            </p>
          </div>
          <div className="mt-12">
            <h1 className="text-2xl font-semibold">Get In Touch</h1>
            <p className="text-base mt-4">
              You can get in touch with us on this provided email.
              <br />
              Email: trendloom@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer mt="mt-12" />
    </>
  );
};

export default ContactPage;
