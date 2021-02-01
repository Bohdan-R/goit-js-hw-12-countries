import './sass/styles.scss';
import debounce from 'lodash.debounce'
import searchCountry from './js/searchCountry';
import refs from './js/refs';

refs.searchForm.addEventListener('input', debounce(searchCountry, 500));

