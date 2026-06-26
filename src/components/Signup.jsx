import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("Creating your account...");
    setSuccess("");
    setError("");

    try {
      const formData = new FormData();

      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      const response = await axios.post(
        "https://tikwet.alwaysdata.net/api/signup",
        formData
      );

      setLoading("");

      if (response.data.success) {
        setSuccess("Account created successfully!");

        setTimeout(() => {
          navigate("/signin");
        }, 1500);
      } else {
        setError(response.data.message || "Registration failed.");
      }
    } catch (err) {
      setLoading("");
      setError("Unable to create account. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Create Account
            </h2>

            <h5 className="text-info">{loading}</h5>
            <h5 className="text-success">{success}</h5>
            <h5 className="text-danger">{error}</h5>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                type="password"
                className="form-control mb-4"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                className="btn btn-dark w-100"
                type="submit"
              >
                Create Account
              </button>

            </form>

            <div className="text-center mt-4">

              Already have an account?

              <br />

              <Link
                to="/signin"
                className="btn btn-outline-primary mt-2"
              >
                Sign In
              </Link>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Signup;