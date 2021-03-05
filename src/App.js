import React, { Component } from "react";
import CardList from "./Components/CardList/CardList"

import './App.scss';

export default class App extends Component {

  render() {
  return (
    <div className="App">
      <h1>{this.props.title}</h1>
      <CardList />
    </div>
  );
  }
}