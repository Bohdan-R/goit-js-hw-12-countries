import listOfCountriesTpl from '../templates/list-of-countries.hbs';
import refs from './refs';

function updateListOfCountriesTpl(country) {
    const markup = listOfCountriesTpl(country);
    refs.countryBoxRef.insertAdjacentHTML('beforeend', markup);
};

export default updateListOfCountriesTpl;