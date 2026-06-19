import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Shoes = () => {

  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const img_url = "https://tikwet.alwaysdata.net/static/images/"

  useEffect(() => {
    axios
      .get("http://tikwet.alwaysdata.net/api/getproducts")
      .then((response) => {
        const shoes = response.data.products.filter(
          (product) => product.product_category === "shoes"
        )

        setProducts(shoes)
      })
  }, [])

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shoes Collection</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.product_id}>
            <div className="card shadow h-100">
              <img
                src={img_url + product.product_photo}
                className="card-img-top"
                alt=""
              />

              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p>{product.product_description.slice(0, 50)}...</p>

                <h4>KES {product.product_cost}</h4>

                <button
                  className="btn btn-dark w-100"
                  onClick={() =>
                    navigate("/makepayment", { state: { product } })
                  }
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shoes