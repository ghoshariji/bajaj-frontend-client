import React, { useState, useEffect } from "react";
import axios from "axios";
import Lay from "../component/Lay";
import Loader from "../component/Loader";

const products = [
  {
    id: 1,
    name: "Bench Press Station Great",
    image:
      "https://store.rabonadev.com/badani/wp-content/uploads/sites/4/2024/12/product7-2.png",
    cost: 10,
  },
  {
    id: 2,
    name: "Dumbell Set Stand Type",
    image:
      "https://store.rabonadev.com/badani/wp-content/uploads/sites/4/2024/12/product2-2.png",
    cost: 1,
  },
  {
    id: 3,
    name: "Dumbbells Training Hands",
    image:
      "https://store.rabonadev.com/badani/wp-content/uploads/sites/4/2024/12/product1-2.png",
    cost: 20,
  },
];

export default function ProductPage() {
  const [redeemMessage, setRedeemMessage] = useState("");
  const [redeemBalance, setRedeemBalance] = useState(0);
  const token = localStorage.getItem("token"); // Assume token is stored in localStorage
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRedeemBalance = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/users/redeem`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLoading(false);
        console.log(response.data);
        setRedeemBalance(response.data.redeem);
      } catch (error) {
        setLoading(false);

        console.error("Error fetching redeem balance:", error);
      }
    };

    fetchRedeemBalance();
  }, []);

  const redeemProduct = async (cost) => {
    if (redeemBalance >= cost) {
      setRedeemMessage("Order Placed");
    } else {
      setRedeemMessage("Insufficient balance!");
    }

    setTimeout(() => setRedeemMessage(""), 3000);
  };

  return (
    <Lay>
      <div className="min-h-screen p-6 bg-gray-100 relative">
        {loading && <Loader />}

        <div className="top-4 right-4 flex items-center bg-green-400 text-white p-2 rounded-xl shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/477/477406.png"
            alt="Coins"
            className="w-6 h-6 mr-2"
          />
          <span className="text-lg font-bold">
            {redeemBalance >= 0 ? "No coin" : `${redeemBalance} Coins`}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">
          FEATURED PRODUCT
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white py-10 rounded-2xl shadow-lg p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
              <h2 className="text-lg font-bold mt-3 uppercase">
                {product.name}
              </h2>
              <p className="text-gray-700 font-semibold">
                Cost: {product.cost} Coins
              </p>
              <button
                onClick={() => redeemProduct(product.cost)}
                className="mt-3 w-full bg-gray-400 hover:bg-gray-600 text-white py-2 rounded-xl"
              >
                Go To Redeem
              </button>
            </div>
          ))}
        </div>

        {redeemMessage && (
          <div className="fixed top-16 right-4 bg-green-500 text-white p-4 rounded-xl shadow-lg">
            {redeemMessage}
          </div>
        )}
      </div>
    </Lay>
  );
}
