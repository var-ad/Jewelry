function Signup() {
    return (
      <div>
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <input type="text" placeholder="Username" className="border p-2 mt-2 w-full" />
        <input type="email" placeholder="Email" className="border p-2 mt-2 w-full" />
        <input type="password" placeholder="Password" className="border p-2 mt-2 w-full" />
        <button className="bg-green-500 text-white px-4 py-2 mt-4">Sign Up</button>
      </div>
    );
  }
  
  export default Signup;
  