import ProductList from "./components/ProductList"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<JewelryPage />} />
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
