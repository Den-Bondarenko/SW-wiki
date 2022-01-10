import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from '../header/header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import RandomPlanet from '../random-planet';
import StarshipDetails from '../starship-details';

import './app.css';

export default class App extends Component {

    render() {
        return(
            <div className='sw-wiki-app'>
                <Header />
                <RandomPlanet className='RandomPlanet'/>
                <PersonDetails className='personDetails'/>
            </div>
        );
    };
};
