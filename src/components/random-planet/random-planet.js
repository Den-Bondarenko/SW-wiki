import React, { Component } from "react";

import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner";

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService;

    state = {
        planet: {} 
    };

    constructor() {
        super();
        this.updatePlanet();
    };

    onPlanedLoaded = (planet) => {
        this.setState({planet});
    };

    updatePlanet() {

        const id = Math.floor(Math.random() * 25) + 1;

        this.swapiService.getPlanet(id)
            .then(this.onPlanedLoaded);
    };

    render() {

        const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;

        return <Spinner />

        return(
            <div className="random-planet">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <h4>{name}</h4>
                <ul>
                    <li>
                        <span>Population - </span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>Rotation Period - </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li>
                        <span>Diameter - </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        );
    };
};


