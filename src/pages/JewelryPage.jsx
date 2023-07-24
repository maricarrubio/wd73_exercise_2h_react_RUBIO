function JewelryPage(props) {
    const { title, jewelry, description, image, discountPercentage, addToCart } = props

    let saleBanner;
  if (discountPercentage > 50) {
    saleBanner = <span className="fw-bold text-danger">SALE!!!</span>
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

export default JewelryPage