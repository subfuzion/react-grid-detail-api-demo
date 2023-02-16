import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

export default function ProductList({products}) {
  const productCards = products.map((p, idx) => (
    <ProductCard product={p} key={idx} />
  ));
  return (
    <div className="productList">{productCards}</div>
  )
}