import React, { useState } from "react"
import Admin from "./Admin.js"

function AdminLog() {
  // let username = document.getElementById("Username")
  // let password = document.getElementById("Password")

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card my-5" id="myCard">
              <form className="card-body cardbody-color p-lg-5">
                <div className="text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="User Name"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else. Please Enter
                    Your Valid Username
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                  />
                  <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="btn btn-primary px-5 mb-5 w-100"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLog
