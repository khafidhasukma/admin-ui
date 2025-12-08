import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

function FormSignUp() {
  return (
    <>
      {/* heading start */}
      <div className="mt-5">
        <h1 className="text-xl font-bold text-center">Create an account</h1>
      </div>
      {/* heading end */}

      {/* form start */}
      <div className="mt-5">
        <form action="">
          <div className="mb-6">
            {/* input name */}
            <LabeledInput label="Name" type="text" placeholder="Enter your name" name="name" id="name" />
          </div>
          <div className="mb-6">
            {/* input email */}
            <LabeledInput label="Email Address" type="email" placeholder="hello@example.com" name="email" id="email" />
          </div>
          <div className="mb-6">
            {/* input password */}
            <LabeledInput label="Password" type="password" placeholder="●●●●●●●●●●●●●●" name="password" id="password" />
          </div>

          {/* terms of service text */}
          <div className="mb-4">
            <p className="text-xs text-gray-03">
              By continuing, you agree to our{" "}
              <a href="#" className="text-primary">
                terms of service
              </a>
              .
            </p>
          </div>

          {/* button sign up */}
          <Button>Sign up</Button>
        </form>
      </div>
      {/* form end */}

      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="bg-special-mainBg absolute px-2 text-sm">or sign up with</div>
      </div>
      {/* teks end */}

      {/* sign up with google start */}
      <div className="mb-8">
        {/* button google */}
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center gap-4">
            <img src="/img/icons/google.svg" alt="Continue with Google" className="size-5" />
            Continue with Google
          </span>
        </Button>
      </div>
      {/* sign up with google end */}

      {/* link start */}
      <div className="flex justify-center">
        <p className="text-sm text-gray-03">
          Already have an account?{" "}
          <a href="#" className="text-primary font-bold">
            Sign in here
          </a>
        </p>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignUp;
