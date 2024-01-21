import React from "react";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="text-base font-bold text-primary">
      {children}
    </label>
  );
};

export default Label;
