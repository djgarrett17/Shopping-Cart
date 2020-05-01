import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from './styles/container.css';

// Components
import Navbar from './components/Navbar/Navbar.js'
// Pages
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'
import Checkout from './pages/Checkout.js'
import Summary from './pages/Summary.js'
import Receipt from './pages/Receipt.js'


function App() { 
  return (
    <Router>
     
      <div style={Container}>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/receipt" component={Receipt} />
      </Switch>
      </div>

    </Router>
  )
}

export default App;
