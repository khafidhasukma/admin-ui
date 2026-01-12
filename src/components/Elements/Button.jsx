import React from "react";

function Button(props) {
  const { children, type = "submit", variant = "primary" } = props;

  const baseClasses =
    "py-3 lg:py-4 px-3 rounded-lg text-sm lg:text-base w-full font-semibold cursor-pointer hover:scale-105";
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-05 text-gray-01",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`;
  return (
    <>
      <button className={finalClasses} type={type}>
        {children}
      </button>
    </>
  );
}

export default Button;
