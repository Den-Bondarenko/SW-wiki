

class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${this._apiBase}${url}` +
                `,received ${this._apiBase}${url}`);
        };
        return await res.json();
    };

    getAllPeople() {
        return this.getResource(`/people/`);
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }

    render() {

    }
};

const swapi = new SwapiService();

swapi.getAllPeople().then((body) => {
    console.log(body);
});