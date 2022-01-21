import React, { Component } from "react";

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService;

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        console.log('constructor()');
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    };

    onPlanedLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {

        const id = Math.floor(Math.random() * 15) + 3;

        this.swapiService.getPlanet(id)
            .then(this.onPlanedLoaded)
            .catch(this.onError);
    };

    render() {
        console.log('render()')

        const { planet, loading, error } = this.state;

        const errorMassage = error ? <ErrorIndicator /> : null; 
        const spinner = loading ? <Spinner /> : null;
        const content = !loading || !error ? <PlanetView  planet = { planet } /> : null;

        return(
            <div className="random-planet">
                { spinner }
                { content }
                { errorMassage }
            </div>
        );
    };
};

const PlanetView = ({ planet }) => {

    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <div className="random-planet">
                <img className="img-random-planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div className="random-planet-info">
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
            </div>
            
        </React.Fragment>
    );
};


