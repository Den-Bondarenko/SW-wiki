import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import './person-details.css';


export default class PersonDetails extends Component {

    swapiService = new SwapiService;

    state = {
        person: {}
    };

    constructor() {
        super();
        this.updatePerson();
    }

    onPersonLoaded = (person) => {
        this.setState({
            person
        });
    };

    updatePerson() {

        const id = Math.floor(Math.random() * 20) + 1;

        this.swapiService.getPerson(id)
            .then(this.onPersonLoaded)
    };

    render() {
        const { id, name, birthYear, height } = this.state.person;
        return (
            <div className="person-details">
                <img className="img-person" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                <div className="person-details-info">
                    <h4>{name}</h4>
                    <ul>
                        <li>
                            <span>Birth Year - </span>
                            <span>{birthYear}</span>
                        </li>
                        <li>
                            <span>Height - </span>
                            <span>{height}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};
