import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Signin = () => {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Show/Hide Password
  const [showPassword, setShowPassword] = useState(false);

  // Status Hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [Error, setError] = useState("");

  const navigate = useNavigate();

  // Submit Function
  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading("Please wait a while...");
    setSuccess("");
    setError("");

    try {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://tikwet.alwaysdata.net/api/signin",
        formData
      );

      setLoading("");

      if (response.data.success === "welcome") {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        navigate("/");
      } else {
        setError("Login unsuccessful");
      }
    } catch (err) {
      setLoading("");
      setError("Incorrect details. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Sign In
            </h2>

            <h5 className="text-info">{loading}</h5>
            <h5 className="text-success">{success}</h5>
            <h5 className="text-danger">{Error}</h5>

            <form onSubmit={handlesubmit}>

              {/* Email */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4 position-relative">

                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control pe-5"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "15px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#6c757d",
                    fontSize: "20px",
                  }}
                >
                  <i
                    className={
                      showPassword
                        ? "bi bi-eye-slash-fill"
                        : "bi bi-eye-fill"
                    }
                  ></i>
                </span>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Log In
              </button>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Signin;