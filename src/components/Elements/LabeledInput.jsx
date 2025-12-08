import React, { useState } from "react";

function LabeledInput(props) {
  const { label, id, type, forgotPassword, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!isPasswordType) {
    return (
      <>
        <label htmlFor={id} className="block text-sm lg:text-base font-medium mb-2">
          {label}
        </label>
        <input
          className="py-3 px-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-primary focus:outline-none focus:ring-0"
          id={id}
          type={type}
          {...rest}
        />
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
      <div className="relative">
        <input
          type={inputType}
          className="py-3 px-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-primary focus:outline-none focus:ring-0"
          id={id}
          {...rest}
        />
        <img
          src="/img/icons/eye.svg"
          alt="Toggle password visibility"
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
          onClick={togglePasswordVisibility}
        />
      </div>
    </>
  );
}

export default LabeledInput;
