import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/users/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );
      
    console.log("Response" + response.data);
      // Save token to local storage
      localStorage.setItem("token", response.data.token);
  
      alert("Login successful!");
      console.log("Login Successful:", response.data);
  
      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };
  

  return (
    <section className="bg-gray-50 dark:bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:bg-gray-800 dark:border-gray-700 p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Login to Your Account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Login
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
