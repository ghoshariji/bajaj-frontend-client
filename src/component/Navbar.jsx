import axios from "axios";
import React, { useEffect, useState } from "react";

// Utility function to create an image URL from the profile picture buffer
const createImageUrl = (fileData, contentType) => {
  try {
    const blob = new Blob([new Uint8Array(fileData)], { type: contentType });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error creating image URL:", error);
    return "";
  }
};

const Navbar = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: null,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data);
        setProfile({
          name: response.data.name,
          email: response.data.email,
          profilePicture: response.data.profilePicture || null,
        });
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };

    fetchProfile();
  }, []);

  // Generate image URL for profile picture if available
  const profileImageUrl = profile.profilePicture
    ? createImageUrl(profile.profilePicture.data.data, profile.profilePicture.contentType)
    : "https://via.placeholder.com/40"; 
    const profileName=profile.name;

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Welcome, {profileName} </span>
        <img
          src={profileImageUrl}
          alt="Profile"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Navbar;
