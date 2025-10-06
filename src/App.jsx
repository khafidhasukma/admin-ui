import "./App.css";

function App() {
  return (
    <div className="container px-5 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="grid md:grid-cols-2 max-w-2xl lg:max-w-3xl w-full rounded-lg overflow-hidden shadow">
        <div className="col max-md:hidden bg-gray-200 w-full flex justify-center items-center">
          <h1 className="text-4xl font-semibold text-gray-500">600 x 500</h1>
        </div>
        <div className="col bg-white w-full px-6 pt-5 pb-12">
          <h1 className="text-2xl text-center font-semibold">Login</h1>
          <div className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="block font-semibold text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 focus:outline-blue-600 rounded-md p-2 w-full"
                placeholder="Masukkan email"
              />
            </div>
            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="block font-semibold text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 focus:outline-blue-600 rounded-md p-2 w-full"
                placeholder="Masukkan password"
              />
            </div>

            {/* Button Submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-full cursor-pointer hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
