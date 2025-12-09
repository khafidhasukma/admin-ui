import React from "react";
import Input from "./Input";

function LabeledInput(props) {
  const { label, id, type, forgotPassword, ...rest } = props;

  const isPasswordType = type === "password";

  if (!isPasswordType) {
    return (
      <>
        <label htmlFor={id} className="block text-sm lg:text-base font-medium mb-2">
          {label}
        </label>
        <Input id={id} type={type} {...rest} />
      </>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center gap-3">
        <label htmlFor={id} className="block text-sm lg:text-base font-medium mb-2">
          {label}
        </label>
        {forgotPassword && (
          <a href="#" className="text-xs text-primary font-medium">
            Forgot password?
          </a>
        )}
      </div>
      <Input id={id} type={type} {...rest} />
    </>
  );
}

export default LabeledInput;
