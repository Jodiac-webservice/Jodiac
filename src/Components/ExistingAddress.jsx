import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ExistingAddress({ onDeliverHere }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  useEffect(() => {
    if (!token) return;
    const fetchAddresses = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jodiacbackend.onrender.com/api/Shipping/Getaddress", {
          method: "GET",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch addresses");

        let fetchedAddresses = [];
        if (Array.isArray(data)) fetchedAddresses = data;
        else if (data && Array.isArray(data.addresses)) fetchedAddresses = data.addresses;
        else if (data && typeof data === "object") fetchedAddresses = [data];

        setAddresses(fetchedAddresses);
      } catch (err) {
        console.error(err);
        setAddresses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAddresses();
  }, [token]);

  const handleDeliverHere = () => {
    if (!selectedAddressId) return alert("Please select an address.");

    const selectedAddress = addresses.find((addr) => addr._id === selectedAddressId);
    if (selectedAddress) {
      const completeAddress = {
        name: selectedAddress.name || "",
        phone: selectedAddress.phone || "",
        streetAddress: selectedAddress.streetAddress || "",
        landmark: selectedAddress.landmark || "",
        city: selectedAddress.city || "",
        state: selectedAddress.state || "",
        pincode: selectedAddress.pincode || "",
      };

      localStorage.setItem("shippingAddress", JSON.stringify(completeAddress));
      if (onDeliverHere) onDeliverHere(completeAddress);
      navigate("/Payment");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {addresses.length > 0 ? (
          addresses.map((addr) => (
            <div
              key={addr._id}
              className={`border rounded-md p-4 ${
                selectedAddressId === addr._id ? "border-yellow-600 shadow-md" : "border-gray-300"
              }`}
            >
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  checked={selectedAddressId === addr._id}
                  onChange={() => setSelectedAddressId(addr._id)}
                  className="mt-1 accent-yellow-600"
                />
                <div>
                  <p className="font-bold">{addr.name || "Unnamed"}</p>
                  <p className="text-sm text-gray-600">{addr.streetAddress || "-"}</p>
                  <p className="text-sm text-gray-600">{addr.landmark || "-"}</p>
                  <p className="text-sm text-gray-600">
                    {addr.city || "-"}, {addr.state || "-"} - {addr.pincode || "-"}
                  </p>
                  <p className="text-sm text-gray-600">Phone: {addr.phone || "-"}</p>
                </div>
              </label>
            </div>
          ))
        ) : (
          <p>No addresses found.</p>
        )}
      </div>

      <button
        onClick={handleDeliverHere}
        disabled={!selectedAddressId}
        className={`mt-6 py-3 px-6 rounded text-white font-medium ${
          selectedAddressId ? "bg-yellow-600 hover:bg-yellow-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Deliver Here
      </button>
    </div>
  );
}
