import React, { useState, useEffect } from "react"
import "./Stream.css"
import ReactPlayer from "react-player"

function Stream() {
  const [id, getId] = useState(localStorage.getItem("btnId"))
  console.log(id)

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/moviedis/${id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setData(response)
      })
  }, [])
  return (
    <>
      {/* <h1>{data.title}</h1>
      <img src={data.image} width="320" height="240" />
      <video width="320" height="240" controls>
        <source src={data.movie} />
      </video>
      <p>{data.desc}</p>
      <p>{data.language}</p>
      <p>{data.quality}</p> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card-body">
              <h4>Movie Online Streaming</h4>
              <img
                className="img-fluid img-thumbnail"
                width="320"
                height="240"
                src={data.image}
              />
              <p>Language: {data.language}</p>
              <p>Quality: {data.quality}</p>
              <p>genre: {data.genres}</p>
            </div>
          </div>
          <div className="col-md-9">
            <div className="container">
              <h6 className="card-title">Movie name :{data.title}</h6>
              <p class="card-text">Description: {data.desc}</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* <video className="object-fit-cover col-md-9" autoplay controls>
                  <source src={data.movie} type="video/mp4, video/x-matroska" />
                </video> */}
                <ReactPlayer url={data.movie} controls playing />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stream
