import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  // SEARCH FUNCTION
  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim().toLowerCase();

    switch (query) {
      case "home":
      case "men":
        navigate("/");
        break;

      case "women":
      case "woman":
      case "ladies":
      case "lady":
      case "dress":
      case "dresses":
        navigate("/women");
        break;

      case "shoe":
      case "shoes":
      case "boot":
      case "boots":
      case "sneakers":
      case "heels":
        navigate("/shoes");
        break;

      case "jewellery":
      case "jewelry":
      case "ring":
      case "rings":
      case "bracelet":
      case "bracelets":
      case "necklace":
      case "necklaces":
      case "earring":
      case "earrings":
        navigate("/jewellery");
        break;

      case "contact":
      case "contact us":
        navigate("/contact");
        break;

      case "add":
      case "add product":
      case "upload":
        navigate("/addproduct");
        break;

      case "signin":
      case "login":
        navigate("/signin");
        break;

      case "signup":
      case "register":
        navigate("/signup");
        break;

      default:
        alert("No page found for: " + search);
    }

    setSearch("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary shadow-sm sticky-top py-3">
        <div className="container-fluid px-lg-5">

          {/* Logo */}
          <NavLink
            to="/"
            className="navbar-brand fw-bold fs-2 text-dark"
            style={{ letterSpacing: "2px" }}
          >
            PIONEER
            <span className="text-warning"> FASHION</span>
          </NavLink>

          {/* Mobile Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >

            {/* Menu */}
            <ul className="navbar-nav mx-auto gap-lg-4 text-center">

              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Men
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/women" className="nav-link">
                  Women
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/shoes" className="nav-link">
                  Shoes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/jewellery" className="nav-link">
                  Jewellery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/addproduct" className="nav-link">
                  Add Product
                </NavLink>
              </li>

            </ul>

            {/* Search */}
            <div className="d-flex align-items-center gap-3 flex-column flex-lg-row">

              <form className="d-flex" onSubmit={handleSearch}>

                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button className="btn btn-dark ms-2">
                  Search
                </button>

              </form>

              {user ? (
                <>
                  <span className="fw-bold">
                    Hi, {user.username}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-dark"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signin"
                    className="btn btn-outline-dark"
                  >
                    Sign In
                  </NavLink>

                  <NavLink
                    to="/signup"
                    className="btn btn-dark"
                  >
                    Sign Up
                  </NavLink>
                </>
              )}

            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;