import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country.name)
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        //    setVisited(true);

        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // setVisited(visited ? false : true)

        setVisited(!visited);
        handleVisitedCountries(country);

    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visted' : 'Not Visited'
                }
            </button>

            <button onClick={() =>{
                handleVisitedFlags(country.flags.flags.png)
            }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;