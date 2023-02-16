import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail({products}) {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.picture} alt="" style={{maxHeight: "40vh", maxWidth: "40vw"}}/>
      <p>Description: {product.description}</p>
      <Link to="/"><button>All Products</button></Link>
    </>
  )
}
