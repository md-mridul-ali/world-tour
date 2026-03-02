import React from 'react';

const Country = ({country}) => {
    // console.log(country.name)
    return (
        <div style={{
            border: '2px solid blue',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area}</p>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;