import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, type, children } = props;
  return (
    <>
      <div
        className={`flex-grow flex justify-center items-center p-8 ${"bg-[url('/images/auth-bg.jpg')]"} bg-cover bg-center`}
      >
        <div className="w-full sm:w-8/12 lg:w-1/2 p-8 bg-white rounded-md shadow">
          <h1 className="text-center text-2xl md:text-4xl font-semibold">
            {title}
          </h1>
          <p className="text-center text-sm md:text-base mt-2 md:mt-4">
            Welcome, please enter your details!
          </p>
          {children}
          <Navigation type={type} />
        </div>
      </div>
    </>
  );
};

const Navigation = ({ type }) => {
    if (type === "login") {
      return (
        <p className="text-sm mt-5 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-accent">
            Register
          </Link>
        </p>
      );
    } else {
      return (
        <p className="text-sm mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-accent">
            Login
          </Link>
        </p>
      );
    }
  };

export default AuthLayout;
