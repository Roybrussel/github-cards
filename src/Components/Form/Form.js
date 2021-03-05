import React, { Component } from "react";
import axios from "axios";

import "./Form.scss";

export default class Form extends Component {
    state = {userName: ""}
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(resp.data);
        this.setState({ userName: "" });
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} className="search-form">
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value})}
                    placeholder="Add by username"
                    required
                />
                <button><i class="fas fa-plus" /></button>
            </form>
        );
    };
}