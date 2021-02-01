import fetchCountries from './fetchCountries';
import updateCountryTpl from './updateCountryMarkup';
import updateListOfCountriesTpl from './updateListOfCountriesMarkup';
import error from './notification';
import refs from './refs';

 function searchCountry(event) {
    
    const inputValue = event.target.value;
    
    refs.countryBoxRef.innerHTML = '';

    if (inputValue) {
        fetchCountries(inputValue).then(data => {
            if (data.length === 1) {
                return updateCountryTpl(data)
            };
            if (data.length >= 2 && data.length <= 10) {
                return updateListOfCountriesTpl(data);
            };
            error({      
                title: 'Too many matches found',    
                text: 'Specify your request',        
                delay: 2700,         
            });        
        });
     };
};
    


export default searchCountry
