import * as assets from '../assets';

function Login() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-500 text-center text-xl font-semibold mt-4">Customer Login</h1>
        <p className="text-gray-500 mt-8">Sign in to your Lillian account</p>
        <form className="mt-8">
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email..."
              className="py-2.5 sm:py-3 px-4 pr-24 block w-full border border-gray-300 rounded-lg sm:text-sm text-gray-900 placeholder-gray-400 bg-white focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Enter your password..."
              className="py-2.5 sm:py-3 px-4 pr-24 block w-full border border-gray-300 rounded-lg sm:text-sm text-gray-900 placeholder-gray-400 bg-white focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <a href="/forgot" className="block text-right text-sm font-small mt-2">
            Forgot your password?
          </a>
          <button
            id="button3"
            className="w-full bg-[#008CA1] text-white py-2 rounded-md mt-6 font-medium"
          >
            Sign In
          </button>
          <div className="flex justify-center items-center mt-4">
            <p className="text-gray-500">Don't have an account?</p>
            <a href="/signup" className="text-blue-500 ml-1 font-medium">Sign Up</a>
          </div>
        </form>
      </div>
      <div>
        <img src={assets.i1} alt="login" className="w-[582px] h-[768px] mt-12 object-cover mb-12" />
      </div>
    </div>
  );
}

export default Login;