import React, { Component } from "react";

import CardList from "./Components/CardList/CardList"
import Form from "./Components/Form/Form";

import './App.scss';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
{name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

export default class App extends Component {

  render() {
  return (
    <div className="App">
      <h1>{this.props.title}</h1>
      <Form />
      <CardList profiles={testData} />
    </div>
  );
  }
}