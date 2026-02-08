import React, { Component } from "react";
import { products } from './products';
import NavBar from './navbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products,
            isLoggedIn: false,
            userData: null
        };
    }

    handleLoginSuccess = (userData) => {
        this.setState({ isLoggedIn: true, userData });
    };

    handleIncrement = (product) => {
        const products = this.state.products.map(p =>
            p.id === product.id && p.value < 10
                ? { ...p, value: p.value + 1 }
                : p
        );
        this.setState({ products });
    };

    handleDecrement = (product) => {
        const products = this.state.products.map(p =>
            p.id === product.id && p.value > 0
                ? { ...p, value: p.value - 1 }
                : p
        );
        this.setState({ products });
    };

    render() {
        const totalValue = this.state.products.reduce((acc, prod) => acc + prod.value, 0);
        return (
            <div>
                <NavBar
                    totalValue={totalValue}
                    prods={this.state.products}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    isLoggedIn={this.state.isLoggedIn}
                    userData={this.state.userData}
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </div>
        );
    }
}

export default App;