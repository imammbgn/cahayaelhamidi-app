import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/gallery";
import Home from "./pages/home"

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App
