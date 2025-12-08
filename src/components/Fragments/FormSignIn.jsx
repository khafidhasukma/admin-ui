import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

function FormSignIn() {
  return (
    <>
      {/* form start */}
      <div className="mt-12 md:mt-14 lg:mt-16">
        <form action="">
          <div className="mb-6">
            {/* input */}
            <LabeledInput label="Email address" type="email" placeholder="hello@example.com" name="email" id="email" />
          </div>
          <div className="mb-8">
            {/* input */}
            <LabeledInput label="Password" type="password" placeholder="●●●●●●●●●●●●●●" name="password" id="password" />
          </div>
          <div className="mb-4">
            {/* checkbox */}
            <CheckBox />
          </div>

          {/* button login */}
          <Button>Login</Button>
        </form>
      </div>
      {/* form end */}
      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="bg-special-mainBg absolute px-2 text-sm"> or sign in with</div>
      </div>
      {/* teks end */}
      {/* sign in with google start */}
      <div className="mb-8">
        {/* button google */}
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center gap-4">
            <img src="/img/icons/google.svg" alt="Sign in with Google" className="size-5" />
            Continue with Google
          </span>
        </Button>
      </div>
      {/* sign in with google end */}
      {/* link start */}
      <div className="flex justify-center">
        <a href="#" className="text-primary text-sm font-bold">
          Create an account
        </a>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignIn;
