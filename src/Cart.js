import React, { Component } from 'react';
import './Cart.css'

class Cart extends Component {
  constructor(props) {
    super(props);
    console.log("Cart")
  }

  render() {
    let price = 0;
    return (
      <div className="cart-container">
        <div className="cart-header">
            <h2>Order 2</h2>
            <button className="cart-reset" title="Reset Order"><i class="material-icons">delete</i></button>
        </div>

        <div className="cart-body">
            <p>Nothing has been added</p>
        </div>

        <div className="cart-footer">
            <p>Total: $ {price.toFixed(2)}</p>
            <div class="cart-notes">
                <textarea placeholder="Any notes?" />
            </div>
            <button className="cart-complete">
                <span>Place Order</span>
                <i class="material-icons">send</i>
            </button>
        </div>
      </div>
    );
  }
}

export default Cart;
