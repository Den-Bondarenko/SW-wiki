import React, { Component } from 'react';
import Header from '../header/header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';

import './app.css';

export default class App extends Component {

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
                <ItemList 
                    onPersonSelected={this.onPersonSelected}/>
                <PersonDetails className='personDetails'
                    personId={this.state.selectedPerson}/>
            </div>
        );
    };
};
