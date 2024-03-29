import React from "react"
import Movie from "../Movies/Movie.js"
import Music from "../Music/Music.js"
import Admin from "../Admin/Admin.js"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#">
            <Link className="nav-link" to="/">
              MM-upLoader
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Movie">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
