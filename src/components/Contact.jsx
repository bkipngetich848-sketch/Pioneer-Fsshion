import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">📞 Contact Us</h2>

              <h4 className="text-primary">Pioneer Fashion</h4>

              <hr />

              <p>
                <strong>📧 Email:</strong> pioneerfashion@gmail.com
              </p>

              <p>
                <strong>📱 Phone:</strong> +254 712 345 678
              </p>

              <p>
                <strong>📍 Location:</strong> Nairobi, Kenya
              </p>

              <p>
                <strong>🕒 Business Hours:</strong>
                <br />
                Monday – Saturday
                <br />
                8:00 AM – 6:00 PM
              </p>

              <hr />

              <p className="text-center text-muted">
                We value our customers. Feel free to contact us for inquiries,
                orders, or support. We're always happy to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;