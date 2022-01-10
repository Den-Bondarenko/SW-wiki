import React, { Component } from "react";
import './person-details.css';

export default class PersonDetails extends Component {

    render() {
        return (
            <div className="person-details">
                <ul>
                    <li>Name</li>
                    <li>population</li>
                    <li>Size</li>
                </ul>
            </div>
        );
    };
};