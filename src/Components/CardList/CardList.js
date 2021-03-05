import React, {Component} from "react";

import Card from "../Card/Card";

import "./CardList.scss";

export default class CardList extends Component {
    render() {
        return (
            <>
            {this.props.profiles.map(profile => <Card key={profile.id}{...profile}/>)}
            </>
        )
    }
}