import "./App.css";

function App() {
  return (
    <main className="min-h-screen py-5 bg-special-mainBg flex justify-center items-center">
      {/* container start */}
      <div className="w-full max-w-sm container px-5">
        {/* logo start */}
        <div className="flex justify-center font-poppins tracking-wide text-primary text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-medium">
          <span className="font-bold">FINE</span>
          bank
          <span className="font-bold">.IO</span>
        </div>
        {/* logo end */}
        {/* form start */}
        <div className="mt-12 md:mt-14 lg:mt-16">
          <form action="">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm lg:text-base font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                className="py-3 px-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-primary focus:outline-none focus:ring-0"
                placeholder="hello@example.com"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-8">
              <div className="flex justify-between items-center gap-3">
                <label htmlFor="password" className="block text-sm lg:text-base font-medium mb-2">
                  Password
                </label>
                <a href="#" className="text-xs text-primary font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className="py-3 px-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder="●●●●●●●●●●●●●●"
                  name="password"
                  id="password"
                />
                <img
                  src="/img/icons/eye.svg"
                  alt="Toggle password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
                />
              </div>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <input type="checkbox" className="text-sm lg:text-base size-4 accent-primary" name="status" id="status" />
              <label htmlFor="status" className="text-sm lg:text-base text-gray-01">
                Keep me signed in
              </label>
            </div>
            <button
              className="py-3 lg:py-4 px-3 rounded-lg text-sm lg:text-base bg-primary w-full text-white font-semibold"
              type="submit">
              Login
            </button>
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
          <button
            className="py-3 lg:py-4 px-3 flex gap-4 items-center justify-center rounded-lg text-sm lg:text-base w-full bg-gray-05 text-gray-01"
            type="button">
            <img src="/img/icons/google.svg" alt="Sign in with Google" className="size-4 md:size-5 lg:size-6" />
            <span>Continue with Google</span>
          </button>
        </div>
        {/* sign in with google end */}
        {/* link start */}
        <div className="flex justify-center">
          <a href="#" className="text-primary text-sm font-bold">
            Create an account
          </a>
        </div>
        {/* link end */}
      </div>
      {/* container end */}
    </main>
  );
}

export default App;
