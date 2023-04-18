import React, { useEffect, useState } from "react"

import Navbar from "../components/Navbar.js"

import "./Movie.css"

import Button from "react-bootstrap/Button"

function Movie() {
  const [data, setData] = useState([])

  function navigateToStreamPage() {
    window.location.href = "/stream"
  }
  useEffect(() => {
    fetch("http://127.0.0.1:8000/movielist/")
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setData(response)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-3">
            <div className="container-fluid">
              <h5>New Releases</h5>
              <div className="row" id="row-data">
                <div className="col-md-12 d-flex flex-wrap p-4">
                  {data.map((data, index) => {
                    return (
                      <>
                        <div className="card col-md-2 m-3 ">
                          <img
                            src={data.image}
                            className="card-img-top p-2"
                            width="150"
                            height="150"
                            alt={"image"}
                          />
                          <div className="card-header">
                            <h4 className="card-header-title" key={index}>
                              {data.title}
                            </h4>
                            <p className="card-header-description">
                              {data.language}
                            </p>

                            <Button
                              variant="primary"
                              id="btn-video"
                              onClick={() => {
                                navigateToStreamPage()
                                localStorage.setItem("btnId", data.id)
                              }}
                              key={data.id}
                            >
                              Play Now
                            </Button>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st container */}
      </div>
    </div>
  )
}

export default Movie
