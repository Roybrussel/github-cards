import React, { Component } from "react";

export default class Form extends Component {
    render(){
        return (
            <form action="">
                <input type="text" placeholder="Search Github user" />
                <button>Add card</button>
            </form>
        )
    }
}