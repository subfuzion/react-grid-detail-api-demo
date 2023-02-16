import './App.css';
import ProductList from './components/ProductListPage/ProductList/ProductList';
import {getProducts} from "./products.js"

const products = getProducts();

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <ProductList products={products} />
      </header>
    </div>
  );
}

export default App;
