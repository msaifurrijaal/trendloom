import React, { useEffect, useRef, useState } from "react";
import InputForm from "../../components/elements/input";
import Button from "../../components/elements/button";
import { login } from "../../services/auth.service";
import Navbar from "../../components/layouts/Navbar";
import AuthLayout from "../../components/layouts/Auth";

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AuthLayout title="Login" type="login" textBtn="LOGIN">
        <form onSubmit={handleLogin}>
          <InputForm
            classname="mt-8 md:mt-12"
            name="username"
            label="Username"
            type="text"
            placeholder="Please enter your username"
            ref={usernameRef}
          />
          <InputForm
            classname="mt-4"
            name="password"
            label="Password"
            type="password"
            placeholder="Please enter your password"
          />
          <div className="flex justify-center">
            <Button
              classname="bg-accent text-white mt-6 lg:mt-12"
              type="submit"
            >
              LOGIN
            </Button>
          </div>
        </form>
        {loginFailed && (
          <p className="text-red-500 text-center mt-5">{loginFailed}</p>
        )}
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
