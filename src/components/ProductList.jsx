function ProductList(props) {
  
    const { title, jewelry, description, image, discountPercentage, addToCart } = props

    let saleBanner;
  if (discountPercentage > 40) {
    saleBanner = <span className="fw-bold text-danger">SALE!!!</span>
  }

  return (
    <>
      <div className="card" style={{
        width: '18rem'
     }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title} {saleBanner}</h5>
        <p className="card-jewelry">{jewelry}</p>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default ProductList