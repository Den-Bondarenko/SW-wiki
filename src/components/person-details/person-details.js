import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import './person-details.css';


export default class PersonDetails extends Component {

    swapiService = new SwapiService;

    state = {
        person: null,
        loading: false 
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId){
            this.updatePerson();
        };
    };

    updatePerson() {
        const { personId } = this.props;

        if(!personId) {
            return;
        };

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                });
            });
    };

    render() {

        if (!this.state.person) {
            return <span>Select a person from a list</span>;
        };

        const { loading, person } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PersonView person={ person }/> : null;

        return (
            <div className="person-details">
                { spinner }
                { content }
            </div>
        );
    };
};

const PersonView = ({ person }) => {

    const { id, name, birthYear, height } = person;

    return (
        <React.Fragment>
            <div>
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
        </React.Fragment>
    )
};
