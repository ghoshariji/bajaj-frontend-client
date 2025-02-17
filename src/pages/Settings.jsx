import React, { useState, useEffect } from "react";
import Layout from "../component/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Using useNavigate for redirection

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // For redirection instead of useHistory

  useEffect(() => {
    // Fetch current user profile data
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
        });
        setProfile({
          name: response.data.name,
          email: response.data.email,
          profilePicture: response.data.profilePicture ? response.data.profilePicture : null,
        });
      } catch (error) {
        setMessage("Failed to fetch profile data.");
        console.error("Profile fetch error:", error);
      }
    };
    
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      profilePicture: e.target.files[0], // Update profile picture file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("password", profile.password);
    if (profile.profilePicture) {
      formData.append("profilePicture", profile.profilePicture);
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER}/api/users/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data", // This is important for file upload
          },
        }
      );
      setMessage("Profile updated successfully.");
      setProfile({
        ...profile,
        name: response.data.name,
        profilePicture: response.data.profilePicture ? response.data.profilePicture : null, // Set new profile picture if updated
      });

      // Redirect after successful profile update
      navigate("/dashboard"); // Replace with your desired route
    } catch (error) {
      setMessage("Profile update failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">User Profile Settings</h2>
        {message && <div className="alert alert-info mb-4">{message}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
              disabled
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              placeholder="Enter a new password (optional)"
            />
          </div>

          {/* Profile Picture Upload */}
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleFileChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
            {profile.profilePicture && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(profile.profilePicture)}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
