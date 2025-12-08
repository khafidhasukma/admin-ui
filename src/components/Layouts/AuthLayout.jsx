import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
  const { children } = props;

  return (
    <>
      <main className="min-h-screen py-5 bg-special-mainBg flex justify-center items-center">
        {/* container start */}
        <div className="w-full max-w-sm container px-5">
          {/* logo start */}
          <Logo />
          {/* logo end */}

          {children}
        </div>
        {/* container end */}
      </main>
    </>
  );
}

export default AuthLayout;
