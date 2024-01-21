import React, { forwardRef } from "react";
import Label from "./label";
import Input from "./input";

const InputForm = forwardRef((props, ref) => {
  const { classname, name, label, type, placeholder } = props;
  return (
    <div className={`w-full ${classname}`}>
      <Label name={name} >{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
});

export default InputForm;
