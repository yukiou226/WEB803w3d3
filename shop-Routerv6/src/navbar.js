import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { faShoppingCart, faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DisplayProducts from './displayProducts';
import Cart from './cart';
import SignIn from './SignIn';
import CheckOut from './CheckOut';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default function NavBar(props) {
    return (
        <Router>
            <div className="navbar p-5 bg-info">
                <h1>
                    <Link to="/" className="text-decoration-none text-white">
                    <span className="px-2">Shop 2</span> 
                    <FontAwesomeIcon icon={faRegistered} className="fas fa-lg text-white"/>eact</Link>
                </h1>
                
                <p className="text-white">
                <Link to="/cart" className="text-white">
                    <FontAwesomeIcon icon={faShoppingCart} className="fas fa-lg mx-3 text-white"/>
                </Link>
                <span className="font-weight-bold text-white">{props.totalValue}</span> items</p>
            </div>
            
            <Routes>
                <Route exact path="/" element={
                <DisplayProducts 
                    products={props.prods}
                    onIncrement={props.handleIncrement}
                    onDecrement={props.handleDecrement}
                />} />
                <Route path="/cart" element={
                    <Cart prods={props.prods} isLoggedIn={props.isLoggedIn}/>
                } />
                <Route path="/signin" element={
                    <SignIn onLoginSuccess={props.onLoginSuccess}/>
                } />
                <Route path="/checkout" element={
                    <CheckOut prods={props.prods} userData={props.userData}/>
                } />
            </Routes>
        </Router>
    )
}