import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Getproductss = ({ category }) => {
  const [loading, setLoading] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const img_url = "https://tikwet.alwaysdata.net/static/images/";

  const fetchProducts = async () => {
    setLoading("Loading products...");

    try {
      const response = await axios.get(
        "https://tikwet.alwaysdata.net/api/getproducts"
      );

      setProducts(response.data.products);
      setLoading("");
    } catch (err) {
      setLoading("");
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products
  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold mb-4">
        {category
          ? `${category.toUpperCase()} COLLECTION`
          : "TOP CATEGORIES"}
      </h2>

      {loading && <h4 className="text-center text-info">{loading}</h4>}

      {error && <h4 className="text-center text-danger">{error}</h4>}

      <div className="row">
        {filteredProducts.length === 0 ? (
          <h4 className="text-center">No products found.</h4>
        ) : (
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.product_id}>
              <div className="card shadow h-100 border-0">

                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  className="card-img-top"
                  style={{
                    height: "280px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-center">
                  <h5>{product.product_name}</h5>

                  <p>
                    {product.product_description.slice(0, 60)}...
                  </p>

                  <h4 className="text-success">
                    KES {product.product_cost}
                  </h4>

                  <button
                    className="btn btn-dark w-100"
                    onClick={() =>
                      navigate("/makepayment", {
                        state: { product },
                      })
                    }
                  >
                    Purchase Now
                  </button>
                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Getproductss;