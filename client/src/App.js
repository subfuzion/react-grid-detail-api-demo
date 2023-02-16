import './App.css';
import ProductList from './components/ProductListPage/ProductList/ProductList';
import {getProducts} from "./products.js"
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetailPage/ProductDetail"

const products = getProducts();

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<ProductList products={products}/>}/>
          <Route path="/product/:productId" element={<ProductDetail products={products}/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
