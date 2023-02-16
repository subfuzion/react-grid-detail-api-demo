import {Link} from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({product}) {
  return (
    <Link className="linkCard" to={`product/${product.id}`}>
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
    </Link>
  )
}
