import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ExistingAddress({ onDeliverHere }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  // Load token from localStorage once
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = window.localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  // Fetch addresses when token is available
  useEffect(() => {
    if (!token) return;

    const fetchAddresses = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jodiacbackend.onrender.com/api/Shipping/Getaddress",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch addresses");
        }
        let fetchedAddresses = [];
        if (Array.isArray(data)) {
  fetchedAddresses = data;
} else if (data && Array.isArray(data.addresses)) {
  fetchedAddresses = data.addresses;
} else if (data && typeof data === "object") {
  fetchedAddresses = [data];
} else {
  fetchedAddresses = [];
}

        setAddresses(fetchedAddresses);
      } catch (error) {
        console.error("Error fetching addresses:", error.message);
        setAddresses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [token]);

  const handleRadioChange = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const handleDeliverHere = () => {
    if (!selectedAddressId) {
      alert("Please select an address first.");
      return;
    }

    const selectedAddress = addresses.find(
      (address) => address._id === selectedAddressId
    );

    if (selectedAddress) {
      localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
      console.log("Selected address saved:", selectedAddress, selectedAddress.landmark);

      alert(`Delivering to: ${selectedAddress.streetAddress}, ${selectedAddress.city}`);
      console.log("landmark:", selectedAddress.landmark);
      navigate("/Payment");

      if (onDeliverHere) {
        onDeliverHere(selectedAddress);
      }
    }
  };

  const handleEdit = (addressId) => {
    console.log("Edit address with ID:", addressId);
    alert(`Editing address with ID: ${addressId}`);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{Array.isArray(addresses) && addresses.length > 0 ? (
  addresses.map((address) => (
    <div
      key={address._id}
      className={`border rounded-md p-4 transition-all duration-200 ${
        selectedAddressId === address._id
          ? "border-yellow-600 shadow-md"
          : "border-gray-300"
      }`}
    >
      <label className="flex items-start space-x-3 cursor-pointer">
        <input
          type="radio"
          name="selectedAddress"
          checked={selectedAddressId === address._id}
          onChange={() => handleRadioChange(address._id)}
          className="mt-1 accent-yellow-600"
        />
        <div>
          <p className="font-bold">{address.name}</p>
          <p className="text-sm text-gray-600">{address.streetAddress}</p>
          <p className="text-sm text-gray-600">{address.landmark}</p>
          <p className="text-sm text-gray-600">
            {address.city}, {address.state} - {address.pincode}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Phone: {address.phone}
          </p>
        </div>
      </label>

      <div className="flex justify-between mt-3">
        <button
          onClick={() => handleEdit(address._id)}
          className="text-yellow-600 text-sm hover:underline"
        >
          Edit
        </button>
      </div>
    </div>
  ))
) : (
  <p>No addresses found.</p>
)}

      </div>

      <button
        onClick={handleDeliverHere}
        disabled={!selectedAddressId}
        className={`mt-6 w-max py-3 px-6 rounded text-white font-medium ${
          selectedAddressId
            ? "bg-yellow-600 hover:bg-yellow-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Deliver Here
      </button>
    </div>
  );
}