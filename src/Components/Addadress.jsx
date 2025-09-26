import React,{ useState,useEffect} from "react";

export default function Addadress() {
const [formData, setFormdata] = useState({
    name: "",
    phone: "",
    streetAddress: "",
    landmark: "",
    city:'',
    pincode:'',
    state:'',
    default: false,
})

const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [token, setToken] = useState("");
useEffect(() => {
    if(typeof window !== "undefined") {
        const storedToken = window.localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }
}, []);

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
    }));
};
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    const res = await fetch("https://jodiacxthreadorabackend.store/api/Shipping/addaddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server did not return JSON. Check your API endpoint.");
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to add address");
    }

    setMessage("Address added successfully!");
    setFormdata({
      name: "",
      phone: "",
      streetAddress: "",
      landmark: "",
      city: "",
      pincode: "",
      state: "",
      default: false,
    });
  } catch (error) {
    console.error("Error:", error);
    setMessage(error.message);
  } finally {
    setLoading(false);
  }
};


  return(
        <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add a New Address</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-3 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          className="border p-3 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="streetAddress"
          placeholder="Flat, House No, Building, etc."
          className="border p-3 rounded"
          value={formData.streetAddress}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="landmark"
          placeholder="Area, Colony, Street, etc."
          className="border p-3 rounded"
          value={formData.landmark}
          onChange={handleChange}
          required
        />

        <div className="flex space-x-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="border p-3 rounded w-full"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            className="border p-3 rounded w-full"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="pincode"
          placeholder="Pin Code"
          className="border p-3 rounded"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`py-3 px-6 rounded w-max text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700'}`}
        >
          {loading ? 'Adding...' : 'Add A New Address'}
        </button>
      </form>

      {message && (
        <p className={`mt-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
}