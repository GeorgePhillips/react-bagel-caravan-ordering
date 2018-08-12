import React, { Component } from 'react';
import DrinksList from './DrinksList';
import FoodList from './FoodList';
import Cart from './Cart';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "selectedSection": "Bagels"
    };
    this.changeToDrinks = this.changeToDrinks.bind(this);
    this.changeToBagels = this.changeToBagels.bind(this);
  }

  changeToDrinks() {
    this.setState({
      "selectedSection": "Drinks"
    });
  }

  changeToBagels() {
    this.setState({
      "selectedSection": "Bagels"
    });
  }

  render() {
    let view = this.state.selectedSection === "Drinks" ? 
      (<DrinksList />) : (<FoodList />);

    return (
      <div className="App">
        <header>
          <h1 className="App-title">Hussey &amp; Loredo</h1>
        </header>
        <main>
          <nav>
            <img src={logo} />
            <ul>
              <li>
                <a href="#Bagels" onClick={this.changeToBagels} 
                  className={this.state.selectedSection === "Bagels" ? "active" : ""}>
                  Bagels
                </a>
              </li>
              <li>
                <a href="#Beves" onClick={this.changeToDrinks} 
                  className={this.state.selectedSection === "Drinks" ? "active" : ""}>
                  Beves
                </a>
              </li>
            </ul>
          </nav>
          <section>
            {view}
          </section>
          <aside>
            <Cart />
          </aside>
        </main>
      </div>
    );
  }
}

export default App;
