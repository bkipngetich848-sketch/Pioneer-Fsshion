import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Makepayment = () => {
    // use the uselocation hook to get the details of the product passed from the previos component
    const { product } = useLocation().state || {}

    const [phone, setPhone] = useState("")

    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")



    // below is the image uRL
    const img_url = "https://tikwet.alwaysdata.net/static/images/"

    const navigate = useNavigate()

    const payment = async (e) => {
        e.preventDefault()

        setLoading("Please wait as we complete the payment")
        try {
            const formdata = new FormData()

            formdata.append("phone", phone)
            formdata.append("amount", product.product_cost)

            const responce = await axios.post("https://kbenkamotho.alwaysdata.net/api/mpesa_payment", formdata)

            setSuccess("Complete payment send on the Phone...")

            setLoading("")
        }
        catch (error) {
            setLoading("")
            setError(error.message)
        }
    }

    console.log(product)
    return (
        <div className='row justify-content-center mt-3'>
            <div className="col-md-8 ">
                <div className="card shadow">
                    <section className='row'>
                        <div className="col-md-6">
                            <img src={img_url + product.product_photo} alt="" className='product-img-pay' />
                        </div>
                        <div className="col-md-6 ">
                            <button onClick={() => navigate("/")} className='btn btn-outline-danger mt-3'>Back</button>

                            <h2 className="text-danger mt-2 text-uppercase myh2">
                                {product.product_name}
                                <p className="text-success">{product.product_description}</p>

                                <h1 className="text-succes myh1">$ {product.product_cost}</h1> <br />

                                <form className='mt-5' onSubmit={payment}>

                                    <h4 className='text-info'>{loading}</h4>
                                    <h4 className='text-success'>{success}</h4>
                                    <h4 className='text-danger'>{error}</h4>


                                    <label>Mpesa number</label>
                                    <input type="text"
                                        placeholder='Enter your number '
                                        className='form-control'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} /> <br />

                                    <button className='btn btn-outline-info mt-2'>Make payment</button>
                                </form>
                            </h2>
                        </div>
                    </section>
                </div>


            </div>

        </div>
    )
}

export default Makepayment
