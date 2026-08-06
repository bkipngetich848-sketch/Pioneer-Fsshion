import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-warning">
              Pioneer Fashion
            </h4>
           

            <p className="small">
              Pioneer Fashion is your trusted destination for
              trendy clothing, stylish accessories, and quality
              fashion products. We bring you the latest styles
              at affordable prices to keep you looking your best.We are also offering free shipping to everywhere in Kenya and in East Africa at large
            </p>

            <div className="d-flex gap-3 fs-4">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-whatsapp"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-warning">
              Quick Links
            </h4>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/"
                  className="text-light text-decoration-none"
                >
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/about"
                  className="text-light text-decoration-none"
                >
                  About
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/addproduct"
                  className="text-light text-decoration-none"
                >
                  Add Product
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-light text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

    

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary text-center py-3">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} 
           All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;