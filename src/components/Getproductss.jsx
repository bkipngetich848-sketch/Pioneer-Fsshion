import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Getproductss = () => {

  // step2:hooks
  const [loading, setLoading] = useState("")
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  const navigate= useNavigate()
  

  // below is the image uRL
  const img_url="https://tikwet.alwaysdata.net/static/images/"

  //  step3: function to fetch
  const fetchproduct = async () => {
    // step4:
    setLoading("Please wait a while....")

    step6:
    try {
      const responce = await axios.get("http://tikwet.alwaysdata.net/api/getproducts")

      //  step7: 
      setProducts(responce.data.products)

      // step8:
      setLoading("")
    }
    catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

console.log(products)

  // Step5:
  useEffect(() => { fetchproduct() }, [])




  return (
    <div className='row'>

      <h3 className='text-center'>VIVO TOP CATEGORIES</h3>

      <h3 className='text-info'>{loading}</h3>
      <h3 className="text-danger">{error}</h3>

     {/* map the products */}
     {products.map((product)=>(
       <div className="col-md-3 justify-content-center mb-4">
        <div className="card-shadow">
          <img src={img_url + product.product_photo} alt="" className='product-img' />

          <h4 className='prodName' >{product.product_name}</h4>

          <p className='prodDesc'>{product.product_description.slice(0,50)}...                                                                                                                                                                                                                                                                                                                                                                                                                    </p>

          <h2 className='prodCost'>Kes {product.product_cost}</h2>

          <button className='btn btn-outline-info'
          onClick={()=>navigate("/makepayment",{state: {product}})}
          
          >Purchase Now</button>
        </div>

      </div>
     ))}
    </div>
  )
}

export default Getproductss
