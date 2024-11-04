import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="bg-blue-50 flex items-center justify-center px-2 py-24">
      <Helmet>
        <title>Login | Gadget Pookie</title>
        <meta name="description" content="Login" />
      </Helmet>
      <div className=" bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w[26rem] md:w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#68cdff]">
          Login
        </h2>
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-base font-medium mb-2"
              for="email"
            >
              Email
            </label>

            <input
              type="Email"
              placeholder="Enter Your Email"
              className="input input-bordered input-info border-[#68cdff] w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-base font-medium mb-2"
              for="password"
            >
              Password
            </label>

            <input
              type="Password"
              placeholder="Enter Password"
              className="input input-bordered input-info border-green-500 w-full max-w-xs"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="btn  w-full bg-[#43c0ff] hover:bg-[#43c0ff] text-white"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
        <p class="mt-4 text-center text-sm text-gray-700">
          Don't have an account?
          <Link to="/singUp" class="text-blue-500 hover:underline ml-2">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
