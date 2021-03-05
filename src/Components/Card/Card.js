import React, { Component } from "react";

import "./Card.scss";

export default class Card extends Component {

    render() {
        const profile = this.props;
        return(
            <div className="profile-container">
                <img src={profile.avatar_url}
                 alt="profile-img" />
                <div className="info-container">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}