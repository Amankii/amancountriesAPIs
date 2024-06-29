document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    form.onsubmit = () => {

        fetch('new.json')
        .then(response => response.json())
        .then(data => {
            const countryText = document.querySelector('#countryText').value.toUpperCase();
            const countries = data.countries[countryText];
            const result = document.querySelector('#result');

            if(countries !== undefined){
                result.innerHTML = countries;
            } else {
                result.innerHTML = 'INVALID'
            }
            
        })
        .catch(error => {
            console.log('Error', error)
        });
        return false;
    };

});