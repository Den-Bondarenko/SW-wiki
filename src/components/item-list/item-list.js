import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import './item-list.css';


export default class ItemList extends Component {

    swapiService = new SwapiService;


    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    };

    render() {

        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spinner />;
        };

        return(
            <ul>
                <li>xLuke</li>
                <li>Darth</li>
                <li>R2-D2</li>
            </ul>
        );
    };
}
