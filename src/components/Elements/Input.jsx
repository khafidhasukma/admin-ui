import React, { useState } from "react";

function Input(props) {
  const { type, id, icon = false, backgroundColor = false, border = "border-gray-03", ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const bgClass = backgroundColor ? backgroundColor : "bg-special-mainBg";
  const inputClassName = `py-3 px-4 text-sm rounded-md w-full ${bgClass} border ${border} text-gray-01 focus:border-primary focus:outline-none focus:ring-0`;

  if (!isPasswordType) {
    return <input className={inputClassName} id={id} type={type} {...rest} />;
  }

  return (
    <div className="relative">
      <input type={inputType} className={inputClassName} id={id} {...rest} />
      {icon && (
        <img
          src="/img/icons/eye.svg"
          alt="Toggle password visibility"
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
}

export default Input;
