import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border border-secondary p-3 text-dark mt-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Input;
