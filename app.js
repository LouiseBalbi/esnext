let favoriteCityId = 'rome';
console.log(favoriteCityId);

favoriteCityId = 'paris';
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

//citiesId = [];
//console.log(citiesId);

// ajout d'un élément au tableau
citiesId.push('tokyo');
console.log(citiesId);

// création d'objets
function getWeather(cityId) {
    const city = cityId.toUpperCase();
    const temperature = 20;
    return { city, temperature };
}

const weather = getWeather(favoriteCityId)
console.log(weather);

// affectation destructurée
const {
    city: cityAffecte,
    temperature: temperatureAffecte
} = weather;

console.log(cityAffecte);
console.log(temperatureAffecte);

// rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);


// Classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        // toString: () => {
        //     return 'Trip ' + [id, name, imageUrl];
        // }

    }
    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price + ']';
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}

const parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);
//console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = parisTrip.getDefaultTrip();
console.log(defaultTrip.toString());


// classe FreeTrip qui étend Trip
class FreeTrip extends Trip {
    toString() {
        return 'Free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());

console.log('////////////////////////////')
////////////////////////////////
// Promise
class TripService {
    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.trips.forEach(trip => {
                    if (trip.name == tripName) {
                        resolve(trip);
                    }
                });
                reject('No trip with name :' + tripName);
            }, 2000)
        });
    }
}


class PriceService {
    constructor() {
        this.prixService = new Map();
        this.prixService.set('paris', 100);
        this.prixService.set('rio-de-janeiro', 800);
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const price = this.prixService.get(tripId);
                //this.prixService.forEach(trip => {
                    if(price){
                        resolve(price);
                    }
                    else{
                       reject('No price found for id :' + tripId); 
                    }
               // })
                
            }, 2000)
        });
    }
}

const tripService = new TripService();
const priceservice = new PriceService();

const findParis = tripService.findByName('Paris');
findParis.then(tripFound => console.log(tripFound)).catch(err => console.log(err));

// const findToulouse = tripService.findByName('Toulouse');
// findParis.then(tripFound => console.log(tripFound)).catch(err => console.log(err));

priceservice.findPriceByTripId('paris').then(price => console.log('price = ', price))
.catch(err => console.log(err));

const tripName = 'Rio de Janeiro';

tripService.findByName(tripName)
    .then(tripFound => priceservice.findPriceByTripId(tripFound.id))
    .then(price => console.log('price = ', price))
    .catch(err => console.log(err));
