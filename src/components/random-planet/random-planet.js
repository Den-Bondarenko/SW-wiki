import React, { Component } from "react";

import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner";

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService;

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    };

    onPlanedLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet() {

        const id = Math.floor(Math.random() * 10) + 1;

        this.swapiService.getPlanet(id)
            .then(this.onPlanedLoaded);
    };

    render() {

        const { planet, loading } = this.state;

        // if(loading){
        //     return <Spinner />;
        // }
        return(
            <div className="random-planet">
                <planetView  planet = { planet } />
            </div>
        );
    };
};

const PlanetView = ({ planet }) => {

    const {id, name, population, rotationPeriod, diameter} = this.state;

    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
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
        </React.Fragment>
    );
};


