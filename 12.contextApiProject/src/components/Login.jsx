import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div>
        <h1 className="text-center px-3 py-2 bg-sky-50 w-fit mx-auto text-gray-800 mb-4 font-bold text-xl rounded-sm">
          Login
        </h1>
        <input
          className="px-4 py-2 outline-none text-gray-800 rounded-sm mb-2"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="px-4 py-2 outline-none text-gray-800 rounded-sm mb-2"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          onClick={handleSubmit}
          className="text-center px-3 py-2 bg-sky-50 w-fit mx-auto block text-gray-800 mt-4 font-bold text-sm rounded-sm"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
