import React, { Component } from 'react';
import Header from '../header/header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 5
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return(
            <div className='sw-wiki-app'>
                <Header />
                <RandomPlanet className='RandomPlanet'/>
                <div className='person-preview'>
                    <ItemList className="item-list"
                        onPersonSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({name, birthYear}) => `${name} (${birthYear})`}/>
                    <PersonDetails className='person-details'
                        personId={this.state.selectedPerson}/>
                </div>
                <ItemList 
                    onPersonSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPlanets}
                    renderItem={({name}) => (<span> {name} <button>!!</button> </span>)}/>
            </div>
        );
    };
};
