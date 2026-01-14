import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib diisi"),
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().min(6, "Password minimal 6 karakter").required("Password wajib diisi"),
});

function FormSignUp({ onSubmit }) {
  return (
    <>
      {/* heading start */}
      <div className="mt-5">
        <h1 className="text-xl font-bold text-center">Create an account</h1>
      </div>
      {/* heading end */}

      {/* form start */}
      <div className="mt-5">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await onSubmit(values.name, values.email, values.password);
            } finally {
              setSubmitting(false);
            }
          }}>
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-6">
                {/* input name */}
                <Field name="name">
                  {({ field }) => (
                    <LabeledInput {...field} id="name" type="text" label="Name" placeholder="Enter your name" />
                  )}
                </Field>
                <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-6">
                {/* input email */}
                <Field name="email">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="hello@example.com"
                    />
                  )}
                </Field>
                <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-6">
                {/* input password */}
                <Field name="password">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="●●●●●●●●●●●●●●"
                    />
                  )}
                </Field>
                <ErrorMessage name="password" component="p" className="text-red-500 text-xs mt-1" />
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
              <Button>{isSubmitting ? "Loading..." : "Register"}</Button>
            </Form>
          )}
        </Formik>
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
          <Link to="/login" className="text-primary font-bold">
            Sign in here
          </Link>
        </p>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignUp;
