import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './assets/css/style.css';
// import './assets/css/mediaquerynav.css';

import $ from 'jquery';

class Navbar extends Component {
    componentDidMount() {

    }
render (){
    return(
        <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li ><Link to="/" className="navshop">Shop</Link></li>
                        <li ><Link to="/cart" className="navmycart">My cart</Link></li>
                        <li ><Link to="/cart" className="navshoppingcart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
    )
}
}


export default Navbar;
