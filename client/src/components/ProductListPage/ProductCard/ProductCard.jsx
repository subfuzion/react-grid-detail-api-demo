import "./ProductCard.css"

export default function ProductCard({product}) {
  return (
    <div className="productCard"
    style={{
      background: `url(${product.picture})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center center'
    }}
    >
      <h1 className="name">{product.name}</h1>
    </div>
  )
}
