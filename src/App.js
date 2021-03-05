import React, { Component } from "react";

import CardList from "./Components/CardList/CardList"
import Form from "./Components/Form/Form";

import './App.scss';

export default class App extends Component {
  state = {
    profiles: [],
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render() {
  return (
    <div className="App">
      <div className="title-container">
        <h1>{this.props.title}</h1>
      </div>
      <Form onSubmit={this.addNewProfile}/>
      <CardList profiles={this.state.profiles} />
    </div>
  );
  }
}