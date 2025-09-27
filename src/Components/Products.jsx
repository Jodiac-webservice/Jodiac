  import React, { useState, useEffect } from "react";
  import axios from "axios";

  const API_BASE = "http://localhost:4000/api/productdetails";

  const Products = () => {
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState("add"); // add | details | list

    // Add Product form
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      category: "",
      images: null,
    });

    // Add Product Details form
    const [detailsData, setDetailsData] = useState({
      _id: "",
      price: "",
      oldPrice: "",
      rating: "",
      reviews: "",
      discount: "",
      color: [],
      size: [],
    });

    const [editData, setEditData] = useState(null);

    // Fetch products
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_BASE}/getproduct`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    useEffect(() => {
      fetchProducts();
    }, []);

    // Add new product
    const handleAddProduct = async () => {
  if (!formData.name || !formData.description || !formData.category) {
    alert("Name, Description, and Category are required");
    return;
  }

  if (!formData.images || formData.images.length === 0) {
    alert("Please select at least one image");
    return;
  }

  const data = new FormData();
  data.append("name", formData.name);
  data.append("description", formData.description);
  data.append("category", formData.category);

  // ✅ Append multiple files under the same key
  for (let i = 0; i < formData.images.length; i++) {
    data.append("images", formData.images[i]);
  }

  // Debug
  for (let pair of data.entries()) {
    console.log(pair[0], pair[1]);
  }

try {
  await axios.post(`${API_BASE}/addproduct`, data); // no manual Content-Type
  fetchProducts();
  setFormData({ name: "", description: "", category: "", images: null });
  setActiveTab("list");
  alert("Product added successfully!");
} catch (err) {
  console.error("Error adding product", err);

  // ✅ Properly show the message from backend
  if (err.response && err.response.data && err.response.data.error) {
    alert("Failed to add product: " + err.response.data.error);
  } else if (err.message) {
    alert("Failed to add product: " + err.message);
  } else {
    alert("Failed to add product: Unknown error");
  }
}
    };
    // Add product details
    const handleAddDetails = async () => {
      try {
        await axios.post(`${API_BASE}/addproductdetails`, detailsData);
        fetchProducts();
        setDetailsData({
  _id: "",
  price: "",
  oldPrice: "",
  rating: "",
  reviews: "",
  discount: "",
  color: [],
  size: [],
});

        setActiveTab("list");
      } catch (err) {
        console.error("Error adding details", err);
      }
    };

    // Update product basic info
    const handleUpdateProduct = async () => {
      if (!editData) return;

      const data = new FormData();
      data.append("id", editData._id);
      data.append("name", editData.name);
      data.append("description", editData.description);
      if (editData.images && editData.images.length > 0) {
        for (let i = 0; i < editData.images.length; i++) {
          data.append("images", editData.images[i]);
        }
      }

      try {
        await axios.post(`${API_BASE}/updateproduct`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        fetchProducts();
        setEditData(null);
      } catch (err) {
        console.error("Error updating product", err);
      }
    };

    return (
      <div className="p-6">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
    {["add", "details", "list"].map((tab) => (
      <button
        key={tab}
        className={`px-4 py-2 rounded-lg font-medium border ${
          activeTab === tab
            ? "bg-[#1b2d2a] text-white border-[#1b2d2a]"
            : "bg-[#f2e8cf] text-[#1b2d2a] border-[#d9c8a9]"
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab === "add"
          ? " Add Product"
          : tab === "details"
          ? " Add Details"
          : " All Products"}
      </button>
    ))}
  </div>


        {/* Add Product */}
        {activeTab === "add" && (
          <div className="bg-white shadow-md p-6 rounded-xl space-y-3 max-w-xl">
            <h2 className="text-xl font-semibold">Add Product</h2>
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg p-2 w-full"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="border rounded-lg p-2 w-full"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="border rounded-lg p-2 w-full"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
            <input
              type="file"
              multiple
              className="border rounded-lg p-2 w-full"
              onChange={(e) => setFormData({ ...formData, images: e.target.files })}
            />
            <button
              onClick={handleAddProduct}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Upload Product
            </button>
          </div>
        )}

        {/* Add Product Details */}
        {activeTab === "details" && (
          <div className="bg-white shadow-md p-6 rounded-xl space-y-3 max-w-xl">
            <h2 className="text-xl font-semibold">Add Product Details</h2>
            <select
              className="border rounded-lg p-2 w-full"
              value={detailsData._id}
              onChange={(e) => setDetailsData({ ...detailsData, _id: e.target.value })}
            >
              <option value="">Select Product</option>
              {products.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Price"
              className="border rounded-lg p-2 w-full"
              value={detailsData.price}
              onChange={(e) => setDetailsData({ ...detailsData, price: e.target.value })}
            />
            <input
              type="number"
              placeholder="Old Price"
              className="border rounded-lg p-2 w-full"
              value={detailsData.oldPrice}
              onChange={(e) => setDetailsData({ ...detailsData, oldPrice: e.target.value })}
            />
            <input
              type="number"
              placeholder="Rating"
              className="border rounded-lg p-2 w-full"
              value={detailsData.rating}
              onChange={(e) => setDetailsData({ ...detailsData, rating: e.target.value })}
            />
            <input
              type="number"
              placeholder="Reviews"
              className="border rounded-lg p-2 w-full"
              value={detailsData.reviews}
              onChange={(e) => setDetailsData({ ...detailsData, reviews: e.target.value })}
            />
            <input
              type="number"
              placeholder="Discount %"
              className="border rounded-lg p-2 w-full"
              value={detailsData.discount}
              onChange={(e) => setDetailsData({ ...detailsData, discount: e.target.value })}
            />
            <input
    type="text"
    placeholder="Colors (comma separated, e.g. Red, Blue, Green)"
    className="border rounded-lg p-2 w-full"
    value={Array.isArray(detailsData.color) ? detailsData.color.join(", ") : ""}
    onChange={(e) =>
      setDetailsData({
        ...detailsData,
        color: e.target.value.split(",").map((c) => c.trim()).filter(Boolean),
      })
    }
  />


<div className="mb-4">
  <h3 className="font-semibold mb-2">Select Sizes</h3>
  <div className="flex flex-col gap-2">
    {["S", "M", "L", "XL", "XXL"].map((size) => (
      <label key={size} className="flex items-center gap-2">
        <input
          type="checkbox"
          value={size}
          checked={detailsData.size.includes(size)}
          onChange={(e) => {
            if (e.target.checked) {
              setDetailsData({
                ...detailsData,
                size: [...detailsData.size, size],
              });
            } else {
              setDetailsData({
                ...detailsData,
                size: detailsData.size.filter((s) => s !== size),
              });
            }
          }}
        />
        {size}
      </label>
    ))}
  </div>
</div>
            <button
              onClick={handleAddDetails}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save Details
            </button>
          </div>
        )}

        {/* Products List */}
        {activeTab === "list" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-3">All Products</h2>
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-[#f2e8cf] p-4 rounded-lg shadow flex justify-between items-center"
              >
                {editData && editData._id === product._id ? (
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      className="border p-2 rounded-lg"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    />
                    <textarea
                      className="border p-2 rounded-lg"
                      value={editData.description}
                      onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                    />
                    <input
                      type="file"
                      multiple
                      onChange={(e) => setEditData({ ...editData, images: e.target.files })}
                    />
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg"
                      onClick={handleUpdateProduct}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <h3 className="font-bold">{product.name}</h3>
                      <p>{product.description}</p>
                      <p className="text-sm text-gray-600">Category: {product.category}</p>
                      {product.price && (
                        <p className="text-sm text-green-700 font-semibold">
                          ₹{product.price}{" "}
                          {product.oldprice && (
                            <span className="line-through text-gray-500">₹{product.oldprice}</span>
                          )}
                        </p>
                      )}
                    </div>
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => setEditData(product)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default Products;
