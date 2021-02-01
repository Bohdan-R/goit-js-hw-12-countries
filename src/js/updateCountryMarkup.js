import countryTpl from '../templates/country.hbs';
import refs from './refs';

function updateCountryTpl(country) {
    const markup = countryTpl(country);
    refs.countryBoxRef.insertAdjacentHTML('beforeend', markup);
};

export default updateCountryTpl;