import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, image: './products/cologne.jpg', desc: 'Unisex Cologne', value: 0 },
                { id: 2, image: './products/iwatch.jpg', desc: 'Apple iWatch', value: 0 },
                { id: 3, image: './products/mug.jpg', desc: 'Unique Mug', value: 0 },
                { id: 4, image: './products/wallet.jpg', desc: 'Mens Wallet', value: 0 }
              ]
        }
    }

    render() {
        return(
            <div>
                <NavBar totalValue={this.state.products.map(prod=>prod.value).reduce((acc, curr, index) => 
                    acc + curr, 0)      
                }/>
                <DisplayProducts 
                    products={this.state.products}
                />
            </div>
        );
    }
}


function DisplayProducts(props) {
    
    return (
        <div>
        {props.products.map(product => {
            return (
                <div key={product.id} className="border border-1 p-3">
                    <h4 className="mx-5">{product.desc}</h4>
                    <img src={product.image} width="150" alt={product.desc} className="mx-5" />
                    <span id="qty" className="mx-2 p-3 border border-3">{product.value}</span>
                    quantity
                </div>
            )
        })}
        </div>
    )
}

function NavBar(props) {
    return (
        <div className="navbar p-5 bg-info">
            <h1>Shop to React</h1>
            <p>
            <FontAwesomeIcon icon={faShoppingCart} className="fas fa-lg mx-3" />
            {props.totalValue} items</p>
        </div>
    )
}

export default App;