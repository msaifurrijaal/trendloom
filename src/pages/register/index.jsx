import React from "react";
import Navbar from "../../components/layouts/Navbar";
import AuthLayout from "../../components/layouts/Auth";
import InputForm from "../../components/elements/input";
import { useDoneLogin } from "../../hooks/useLogin";

const RegisterPage = () => {
  useDoneLogin();
return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AuthLayout
        title="Register"
        type="register"
        textBtn="REGISTER"
      >
        <InputForm
            classname="mt-8 md:mt-12"
            name="email"
            label="Email"
            type="email"
            placeholder="Please enter your email"
          />
          <InputForm
            classname="mt-4"
            name="password"
            label="Password"
            type="password"
            placeholder="Please enter your password"
          />
          <InputForm
            classname="mt-4"
            name="confirm-pass"
            label="Confirm Password"
            type="password"
            placeholder="Please enter your confirm password"
          />
      </AuthLayout>
    </div>
)
}

export default RegisterPage;