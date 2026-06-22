import axios from "axios";
import React, { useState } from "react";

const Addproducts = () => {
  // Product hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [category, setCategory] = useState("");
  const [product_photo, setProductPhoto] = useState(null);

  // Status hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Submit function
  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading("Uploading product...");
    setSuccess("");
    setError("");

    try {
      // Create FormData object
      const formdata = new FormData();

      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("category", category);
      formdata.append("photo", product_photo);

      // Send data to API
      const response = await axios.post(
        "https://tikwet.alwaysdata.net/api/addproduct",
        formdata
      );

      console.log(response.data);

      setLoading("");
      setSuccess("✅ Product added successfully!");

      // Clear form
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setCategory("");
      setProductPhoto(null);
    } catch (error) {
      console.error(error);

      setLoading("");
      setError(" Failed to add product. Please try again.");
    }
  };

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "#010101",}}
    >
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div
            className="card border-0 shadow-lg p-4"
            style={{ borderRadius: "20px" }}
          >
            <h2
              className="text-center mb-4"
              style={{
                letterSpacing: "2px",
                fontWeight: "bold",
              }}
            >
              ADD NEW PRODUCT
            </h2>

            <form onSubmit={handlesubmit}>
              {loading && (
                <div className="alert alert-info">{loading}</div>
              )}

              {success && (
                <div className="alert alert-success">{success}</div>
              )}

              {error && (
                <div className="alert alert-danger">{error}</div>
              )}

              {/* Product Name */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  value={product_name}
                  onChange={(e) => setProductName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              {/* Product Description */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Description
                </label>
                <textarea
                  placeholder="Enter product description"
                  value={product_description}
                  onChange={(e) =>
                    setProductDescription(e.target.value)
                  }
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Price */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Price (Ksh)
                </label>
                <input
                  type="number"
                  placeholder="Enter product price"
                  value={product_cost}
                  onChange={(e) => setProductCost(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              {/* Category */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">
                    Select Product Category
                  </option>
                  <option value="women">
                    Women Clothing
                  </option>
                  <option value="shoes">
                    Shoes
                  </option>
                  <option value="jewellery">
                    Jewellery
                  </option>
                </select>
              </div>

              {/* Product Photo */}
              <div className="mb-4">
                <label className="form-label fw-bold">
                  Product Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setProductPhoto(e.target.files[0])
                  }
                  className="form-control"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-dark w-100 py-2"
                style={{
                  borderRadius: "10px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                ADD PRODUCT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;