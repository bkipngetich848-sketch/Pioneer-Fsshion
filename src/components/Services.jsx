import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {

  const navigate = useNavigate();

  const goToCategory = (path) => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate(path);
    } else {
      alert("Please create an account or sign in first.");
      navigate("/signin");
    }
  };

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-5">
        Explore Our Services....
      </h1>

      <div className="row">

        <div className="col-md-3">
          <div className="card p-4 shadow text-center">
            <h3> Men.</h3>

            <button
              className="btn btn-dark mt-3"
              onClick={() => goToCategory("/products")}
            >
              Explore
            </button>
          </div>
        </div>

        <div className="col-md-3 mt-4">
          <div className="card p-4 shadow text-center">
            <h3> Women.</h3>

            <button
              className="btn btn-dark mt-3"
              onClick={() => goToCategory("/women")}
            >
              Explore Our Services...
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-4 shadow text-center">
            <h3>Shoes.</h3>

            <button
              className="btn btn-dark mt-3"
              onClick={() => goToCategory("/shoes")}
            >
              Explore
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-4 shadow text-center">
            <h3> Jewellery.</h3>

            <button
              className="btn btn-dark mt-3"
              onClick={() => goToCategory("/jewellery")}
            >
              Explore
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Services;