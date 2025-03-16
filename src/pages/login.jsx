function Login() {
    return (
      <div>
        <h1 className="text-2xl font-bold">Login</h1>
        <input type="text" placeholder="Username" className="border p-2 mt-2 w-full" />
        <input type="password" placeholder="Password" className="border p-2 mt-2 w-full" />
        <button className="bg-blue-500 text-white px-4 py-2 mt-4">Login</button>
      </div>
    );
  }
  
  export default Login;
  