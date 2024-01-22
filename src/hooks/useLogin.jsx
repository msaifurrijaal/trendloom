import React, { useEffect } from "react";
import { useIsUserLogin } from "../context/isLogin";

export const useLogin = () => {
  const { isUserLogin } = useIsUserLogin();

  useEffect(() => {
    if (!isUserLogin) {
      window.location.href = "/login";
    }
  }, []);
};

export const useDoneLogin = () => {
  const { isUserLogin } = useIsUserLogin();

  useEffect(() => {
    if (isUserLogin) {
      window.location.href = "/";
    }
  }, []);
}