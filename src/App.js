import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name: 'laptop', price: '110000'},
    {name: 'phone', price: '45000'},
    {name: 'watch', price: '2500'},
    {name: 'tablet', price: '10000'}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product  name="laptop" price="150000"></Product>
      <Product  name="phone" price="50000"></Product>
      <Product  name="watch" price="5000"></Product> */}
    </div>
  );
}

function Product(props){
  return (
    <div className='product'>
      <h1>Name: {props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
