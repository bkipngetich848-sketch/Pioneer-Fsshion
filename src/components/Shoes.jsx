import React from "react";

const Shoes = () => {
  return (
    <>
      {/* CAROUSEL */}
      <div
        id="shoesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="images/sho1.webp"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="shoe 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src="images/shoe2.webp"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="shoe 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="images/sho3.webp"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="shoe 3"
            />
          </div>

          <div className="carousel-item">
            <img
              src="images/sho4.webp"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="shoe 4"
            />
          </div>

          <div className="carousel-item">
            <img
              src="images/sho5.webp"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="shoe 5"
            />
          </div>

          <div className="carousel-item">
            <img
              src="images/sho6.webp"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="shoe 6"
            />
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#shoesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#shoesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* ================= SEASON DEALS ================= */}
      <div className="container mt-5">
        <h1 className="bg-secondary text-white text-center p-3">
          Season Deals
        </h1>

        <div className="row mt-3">

          <div className="col-md-4 mb-3">
            <img
              src="images/sh1"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 1"
            />
          </div>

          <div className="col-md-4 mb-3">
            <img
              src="images/sh2"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 2"
            />
          </div>

          <div className="col-md-4 mb-3">
            <img
              src="images/sh3"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 3"
            />
          </div>


          <div className="col-md-4 mb-3">
            <img
              src="images/sh3"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 4"
            />
          </div>


          <div className="col-md-4 mb-3">
            <img
              src="images/sh4.jpeg"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 5"
            />
          </div>


          <div className="col-md-4 mb-3">
            <img
              src="images/sh5.jpeg"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 6"
            />
          </div>


          <div className="col-md-4 mb-3">
            <img
              src="images/sh6.jpeg"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 7"
            />
          </div>


          <div className="col-md-4 mb-3">
            <img
              src="images/sh7.jpeg"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 8"
            />
          </div>


          <div className="col-md-4 mb-3">
            <img
              src="images/sh8.jpeg"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 9"
            />
          </div>


          <div className="col-md-4 mb-3">
            <img
              src="images/sh9.jpeg"
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="deal 10"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Shoes;