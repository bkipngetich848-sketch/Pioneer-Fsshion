import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    navigate("/signin")
  }

  const handleSearch = (e) => {
    e.preventDefault()

    if (search.trim()) {
      navigate(`/search/${search}`)
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary shadow-sm sticky-top py-3">
        <div className="container-fluid px-lg-5">

          {/* Logo */}
          <div className='kk b'>
            <NavLink
            to="/"
            className="navbar-brand fw-bold fs-2 text-dark"
            style={{ letterSpacing: "2px" }}
          >
            PIONEER
            <span className="text-warning"> FASHION</span>
          </NavLink>
          </div>

          {/* Mobile Toggle */}
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

            {/* Center Menu */}
            <ul className="navbar-nav mx-auto gap-lg-4 text-center">

              <li className="nav-item">
                <NavLink to="/" className="nav-link nav-custom">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/women" className="nav-link nav-custom">
                  Women
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/shoes" className="nav-link nav-custom">
                  Shoes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/jewellery" className="nav-link nav-custom">
                  Jewellery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/addproduct" className="nav-link nav-custom">
                  Add Product
                </NavLink>
              </li>

            </ul>

            {/* Search + User */}
            <div className="d-flex align-items-center gap-3 flex-column flex-lg-row">

              <form
                className="d-flex search-box"
                onSubmit={handleSearch}
              >
                <input
                  type="search"
                  placeholder="Search fashion..."
                  className="form-control border-0"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button
                  className="btn btn-dark px-4"
                  type="submit"
                >
                  Search
                </button>
              </form>

              {user ? (
                <>
                  <span className="fw-semibold text-dark">
                    Hi, {user.username}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-dark rounded-pill"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signin"
                    className="btn btn-outline-dark rounded-pill"
                  >
                    Sign In
                  </NavLink>

                  <NavLink
                    to="/signup"
                    className="btn btn-dark rounded-pill"
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
  )
}

export default Navbar