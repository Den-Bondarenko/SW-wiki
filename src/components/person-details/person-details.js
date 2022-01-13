import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import './person-details.css';

export default class PersonDetails extends Component {
    swapiService = new SwapiService;
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