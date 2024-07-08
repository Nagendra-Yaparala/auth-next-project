
const LoginPage = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="flex flex-col justify-center items-center text-white gap-5 p-10 bg-gray-800 rounded-lg shadow-lg">
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md w-full bg-gray-700 text-white border border-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col w-full mt-4">
            <label htmlFor="password" className="mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md w-full bg-gray-700 text-white border border-gray-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="mt-6 p-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Login
          </button>
        </div>
      </div>
    );
  };
  
  export default LoginPage;
  