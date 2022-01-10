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

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map((person) => {
            return this._transformPerson(person);
        });
    };

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map((planet) => {
            return this._transformPlanet(planet);
        });
    };

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map((ship) => {
            return this._transformStarships(ship);
        });
    };

    async getPerson(id) {
        const person = await this.getResource(`/planets/${id}`);
        return this._transformPerson(person);
    };

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    async getStarship(id) {
        const ship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(ship);
    };

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            birthUear: person.birth_uear,
            homeworld: person.homeworld
        }
    };

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship(ship) {
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

