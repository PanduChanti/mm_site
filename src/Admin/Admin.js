import React, { useEffect, useState } from "react"
import axios from "axios"

function Admin() {
  const [title, setTitle] = useState("")
  const [photo, setPhoto] = useState(null)
  const [video, setVideo] = useState(null)
  const [generic, setGeneric] = useState("")
  const [language, setLanguage] = useState("")
  const [des, setDes] = useState("")
  const [quality, setQuality] = useState("")

  const [isloading, setIsLoading] = useState(false)
  const [statustext, setStatustext] = useState(false)
  const [erro, setErro] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()

    setIsLoading(true)

    const form_data = new FormData()
    form_data.append("title", title)
    form_data.append("image", photo)
    form_data.append("movie", video)
    form_data.append("genres", generic)
    form_data.append("language", language)
    form_data.append("desc", des)
    form_data.append("quality", quality)

    axios
      .post("http://127.0.0.1:8000/movieadd/", form_data)
      .then((res) => {
        console.log(res)
        setStatustext("Upload successful")
        setErro(null)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setErro("Upload Failed")
        setStatustext(null)
      })
  }

  return (
    <div>
      {isloading ? (
        <div>Uploading Please wait...</div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto ">
              <div className="card my-5" id="myCard">
                <form className="card-body cardbody-color p-lg-5">
                  <div className="mb-3">
                    <label htmlFor="video_file" className="form-label">
                      Video File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="video_file"
                      accept="video/mp4, video/x-m4v, video/*, .mkv"
                      onChange={(e) => setVideo(e.target.files[0])}
                      placeholder="video_file"
                    />
                    <div className="form-text">
                      Please upload a video file in MP4, M4V, or MKV format.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="photo_file" className="form-label">
                      Photo File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="photo_file"
                      accept="image/png, image/jpeg"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      placeholder="photo_file"
                    />
                    <div className="form-text">
                      Please upload a photo in PNG or JPEG format.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title"
                    />
                    <div className="form-text">
                      Please enter a title for your content.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="generic" className="form-label">
                      Generic
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="generic"
                      value={generic}
                      onChange={(e) => setGeneric(e.target.value)}
                      placeholder="Generic"
                    />
                    <div className="form-text">
                      Please enter a generic value.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="language" className="form-label">
                      Language
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      placeholder="Language"
                    />
                    <div className="form-text">
                      Please enter the language of your content.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="language" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="language"
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                      placeholder="Description"
                    />
                    <div className="form-text">
                      Please enter the Description of your content.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="language" className="form-label">
                      Quality
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="language"
                      value={quality}
                      onChange={(e) => setQuality(e.target.value)}
                      placeholder="Quality"
                    />
                    <div className="form-text">Please enter the Quality</div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      onClick={submitForm}
                      id="btn"
                      className="btn btn-primary px-5 mb-5 w-100"
                    >
                      Upload
                    </button>
                  </div>

                  {statustext && <div>{statustext}</div>}
                  {erro && <div>{erro}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
