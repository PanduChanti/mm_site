import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Movie from "./Movies/Movie.js"
import Music from "./Music/Music.js"
import Home from "./Homepage/Home.js"
import Admin from "./Admin/Admin.js"
import Adminlogin from "./Admin/Adminlogin.js"
import Stream from "./Stream/Stream.js"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Movie" element={<Movie />} />
          <Route path="Music" element={<Music />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Adminlogin" element={<Adminlogin />} />
          <Route path="Stream" element={<Stream />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
