import React from "react";
import Button from "../button";

const LogoutDialog = (props) => {
  const { yOnClick, nOnClick } = props;
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-8 px-12 bg-slate-50 border border-gray-300 rounded text-center z-[99999]">
      <h2 className="text-xl font-semibold text-accent">
        Are you sure,
        <br />
        you want to logout?
      </h2>

      <div className="flex justify-between mt-8 ">
        <Button
          classname="bg-white text-accent me-4 border border-transparent hover:border hover:border-accent"
          onClick={nOnClick}
        >
          Cancel
        </Button>
        <Button
          classname="bg-accent text-white me-4 border border-transparent hover:border hover:border-gray-500"
          onClick={yOnClick}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default LogoutDialog;
