import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fade shadow-lg rounded overflow-hidden"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="images/slide1.webp"
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover" }}
            alt="Electronics"
          />
   
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="images/slide2.webp"
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover" }}
            alt="Fashion"
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h2>Fashion Collection</h2>
            <p>Stay stylish with our latest arrivals.</p>
          </div>
        </div>


        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="images/slide3.webp"
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover" }}
            alt="Home Appliances"
          />
        </div>


        {/* Slide 4 */}
        <div className="carousel-item">
          <img
            src="images/slide4.webp"
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover" }}
            alt="Special Offers"
          /> 
        </div>
      </div>


      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;