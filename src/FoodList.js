import React, { Component } from 'react';
import './DrinksList.css';

class FoodList extends Component {
  constructor(props) {
    super(props);
    console.log("Bagels")
  }

  render() {
    return (
      <div className="bagels-container">
        <h2>Bagels</h2>
        <h4>Spreads ($7)</h4>
        <ul class="items-grid">
          <li>Marmite &amp; Cheese</li>
          <li>Bay Road Peanut Butter</li>
          <li>Cream Cheese &amp; Jam</li>
          <li>Cream Cheese</li>
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
        </ul>

        <h4>Vegetarian</h4>
        <ul class="items-grid">
          <li>Smashed Avocado ($7)</li>
          <li>Grilled Haloumi ($10)</li>
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
          <li className="filler" />
        </ul>

        <h4>Other</h4>
        <ul class="items-grid">
          <li>Bacon &amp; Egg ($10)</li>
          <li>Cold Smoked Salmon ($12)</li>
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

export default FoodList;
