import React from "react";

const Button = (props) => {
  const {
    children = "...",
    classname = "bg-slate-700",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-normal ${classname}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
