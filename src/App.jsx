import JewelryPage from "./pages/JewelryPage"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelrypage" element={<JewelryPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
