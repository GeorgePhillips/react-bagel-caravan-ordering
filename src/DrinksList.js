import React, { Component } from 'react';
import './DrinksList.css';

class DrinksList extends Component {
  constructor(props) {
    super(props);
    console.log("Drinks")
  }

  render() {
    return (
      <div className="drinks-container">
        <h2>Beverages</h2>
        <h4>Espresso ($4)</h4>
        <ul class="items-grid">
          <li>Short Black</li>
          <li>Long Black</li>
          <li>Americano</li>
          <li>Iced</li>
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
        </ul>

        <h4>Espresso with Milk ($4.50)</h4>
        <ul class="items-grid">
          <li>Flat White</li>
          <li>Latte</li>
          <li>Cappuccino</li>
          <li>Mocha</li>
          <li>Hot Chocolate</li>
          <li>Chai</li>
          <li>Iced with Milk</li>
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
        </ul>

        <h4>Tea ($3.50)</h4>
        <ul class="items-grid">
          <li>English Breakfast</li>
          <li>Earl Gray</li>
          <li>Lemon, Honey &amp; Ginger</li>
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
        </ul>
      </div>
    );
  }
}

export default DrinksList;
