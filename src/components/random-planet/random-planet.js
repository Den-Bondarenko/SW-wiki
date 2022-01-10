import React, { Component } from "react";

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null

    };

    render() {

        const { name, population, rotationPeriod, diameter } = this.state;

        return(
            <div className="random-planet">
                <h4>{name}</h4>
                <ul>
                    <li>
                        <span>Population</span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li>
                        <span>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        );
    };
};


