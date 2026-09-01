
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/product';

function App() {
  const products = [{
    id: 1,
    name: 'Shirt',
    price: 19.99,
    inStock: false
  }, {
    id: 2,
    name: 'Pants',
    price: 29.99,
    inStock: false
  }, {
    id: 3,
    name: 'Shoes',
    price: 39.99,
    inStock: true
  }];
  return (
    <>
      <Navbar />
      <h1>welcome to e-shop</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          productid={product.id}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </>
  )
}

export default App
