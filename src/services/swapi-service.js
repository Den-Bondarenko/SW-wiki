export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${this._apiBase}${url}` +
                `,received ${this._apiBase}${url}`);
        };
        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map((person) => {
            return this._transformPerson(person);
        });
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map((planet) => {
            return this._transformPlanet(planet);
        });
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map((ship) => {
            return this._transformStarships(ship);
        });
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    getStarship = async (id) => {
        const ship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(ship);
    };

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            birthYear: person.birth_year,
            height: person.height
        }
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship = (ship) => {
        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.cost_in_credits,
            length: ship.length,
            passengers: ship.passengers,
            cargoCapacity: ship.cargo_capacity
        }
    }
};

