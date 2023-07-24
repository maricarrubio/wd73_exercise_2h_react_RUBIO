import { useEffect, useState } from "react"
import JewelryPage from "../pages/JewelryPage"

function ProductList() {
  const [products, setProducts] = useState([])
  const [cartItemCounter, setCartItemCounter] = useState(0)
  
  useEffect(() => {
    document.title = 'Products'
  }, [])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
  }, [setProducts])

  function addToCart() {
    setCartItemCounter(cartItemCounter + 1)
  }

  return (
    <>
      <h3>Cart Items: <span className="fw-bold">{cartItemCounter}</span></h3>
      <div className="d-flex flex-wrap">
        {
          products.map(
            product => <JewelryPage
              key={product.id}
              title={product.title}
              jewelry={product.jewelry}
              description={product.description}
              image={product.image}
              discountPercentage={product.discountPercentage}
              addToCart={addToCart}
            />
          )
        }
      </div>
    </>
  )
}

export default ProductList