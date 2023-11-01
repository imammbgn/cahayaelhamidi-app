import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Home from "./pages/home"

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
