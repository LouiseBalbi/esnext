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
function getWeather(cityId){
    const city = cityId.toUpperCase();
    const temperature = 20;
    return {city, temperature};
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
