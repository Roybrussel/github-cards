import React, { Component } from "react";

import "./Card.scss";

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
{name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

export default class Card extends Component {

    render() {
        const profile = testData[0];
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