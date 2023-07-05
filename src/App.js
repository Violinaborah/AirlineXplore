import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';
import { fetchProducts } from "./redux/actions/productActions";
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchProducts());
},[])
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<>{`Page not Found`}</>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
