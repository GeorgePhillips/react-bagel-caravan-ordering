import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "selectedSection": "Bagels"
    };
    this.changeToTab = this.changeToTab.bind(this);
  }

  render() {
    return (
      <div className="Tab-container">
        <h2>Tab</h2>
      </div>
    );
  }
}

export default Tab;
