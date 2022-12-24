import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Product from './component/Product.jsx';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Product/>
    </div>
  );
}

export default App;