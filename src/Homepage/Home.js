import React from "react"
import "./Home.css"
import Movie from "../Movies/Movie.js"
import Music from "../Music/Music.js"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar.js"

function Home() {
  const images = [
    "https://moviegalleri.net/wp-content/gallery/master-telugu-posters/Vijay-Master-Telugu-Movie-Posters-1fba00a.jpg",
    "https://assets.thehansindia.com/h-upload/2020/03/24/956618-master.jpg",
    "https://assets.thehansindia.com/h-upload/2022/03/24/1283372-rrr.webp",
    "https://www.nowrunning.com/content/movie/2018/lover-14716/bg.jpg",
    "https://telugutimes.net/storage/gallery/cinema/wall-papers/godfather-movie-poster/godfather-movie-poster-1.jpg",
    "https://c4.wallpaperflare.com/wallpaper/89/717/68/telugu-tamil-kaala-karikaalan-rajnikanth-wallpaper-thumb.jpg",
    "https://www.nowrunning.com/content/movie/2018/lover-14716/bg.jpg",
    "https://imgcdn.ragalahari.com/sep2021/designs/rosound-posters/rosound-posters1t.jpg",
  ]
  let index = 0

  function changeImage() {
    const image = document.getElementById("myImage")

    image.style.overflow = "hidden"
    image.src = images[index]
    index = (index + 1) % images.length
  }

  setInterval(changeImage, 5000)

  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <Navbar />
        <header className="bg-dark">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2">
                    MM-UpLoader
                  </h1>
                  <p className="lead fw-normal text-white-50 mb-4">
                    Listen Songs , Watch & Download Telugu Hindi Tamil Malayalam
                    Movies Online Free
                  </p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a
                      className="btn btn-primary btn-lg px-4 me-sm-3"
                      href="#features"
                    >
                      Movies
                    </a>
                    <a className="btn btn-outline-light btn-lg px-4" href="#!">
                      Music
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 overflow-hidden object-fit-md-contain  col-md-5 d-md-block text-center"
                id="mycon"
              >
                <img
                  className="my-5 container "
                  src={
                    "https://assets.thehansindia.com/h-upload/2022/03/24/1283372-rrr.webp"
                  }
                  width="800px"
                  alt="..."
                  id="myImage"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bolder mb-0">
                  A better way to start Watching & Listening music.
                </h2>
              </div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-collection"></i>
                    </div>
                    <h2 className="h5">Latest Movies</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-building"></i>
                    </div>
                    <h2 className="h5">Latest Music</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">From our blog</h2>
                  <p className="lead fw-normal text-muted mb-5">
                    Bookmark Us or Use Full Url and Download, don't search us on
                    google/bing, if any issues let us know live chat
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-5">
              <div className="col-lg-4 mb-5">
                <div className="card h-100 p-3 " id="myCard">
                  <img
                    className="card-img-top"
                    src="https://assets.thehansindia.com/h-upload/2022/03/24/1283372-rrr.webp"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      New
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">Movies Watch Here</h5>
                    </a>
                    <p className="card-text mb-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-primary">Click Here</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 p-3" id="myCard">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/adb5bd/495057"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      new
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">Music Listen Here</h5>
                    </a>
                    <p className="card-text mb-0">
                      This text is a bit longer to illustrate the adaptive
                      height of each card. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <button className="btn btn-primary">
                            Click Here
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright &copy; Your Website 2023
              </div>
            </div>
            <div className="col-auto">
              <a className="link-light small" href="#!">
                Privacy
              </a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">
                Terms
              </a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
