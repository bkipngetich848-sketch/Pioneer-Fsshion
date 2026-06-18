import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Makepayment = () => {
  const { product } = useLocation().state || {};
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://tikwet.alwaysdata.net/static/images/";

  // Prevent page crash
  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-warning">
          Product not found.
        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Back Home
        </button>
      </div>
    );
  }

  const payment = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    // Validate Kenyan phone number
    if (!phone.match(/^(07|01|2547|2541)\d{8}$/)) {
      setError("Please enter a valid MPESA number.");
      return;
    }

    try {
      setLoading(true);

      const formdata = new FormData();
      formdata.append("phone", phone);
      formdata.append("amount", product.product_cost);

      await axios.post(
        "https://kbenkamotho.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setSuccess(
        "Payment request sent successfully. Check your phone and enter your MPESA PIN."
      );

      setPhone("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Payment failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="row g-0">

          {/* Product Image */}
          <div className="col-md-6">
            <img
              src={img_url + product.product_photo}
              alt={product.product_name}
              className="img-fluid h-100 w-100"
              style={{
                objectFit: "cover",
                minHeight: "450px",
              }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6 p-4">

            <button
              onClick={() => navigate("/")}
              className="btn btn-outline-secondary mb-3"
            >
              ← Back
            </button>

            <h2 className="fw-bold text-dark">
              {product.product_name}
            </h2>

            <p className="text-muted">
              {product.product_description}
            </p>

            <h3 className="text-success fw-bold mb-4">
              KES {product.product_cost}
            </h3>

            {success && (
              <div className="alert alert-success">
                {success}
              </div>
            )}

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <form onSubmit={payment}>
              <label className="form-label fw-bold">
                MPESA Phone Number
              </label>

              <input
                type="tel"
                placeholder="e.g. 0712345678"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="btn btn-success w-100 mt-4"
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                    ></span>
                    Processing...
                  </>
                ) : (
                  "Pay with MPESA"
                )}
              </button>
            </form>

            <div className="mt-4">
              <small className="text-muted">
                Pay All Your Payment Instantly Everywhere And Anywhere Using M-pesa...
              </small>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Makepayment;