import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)

    const {visitedCountries, setVisitedCountries} = useState([]);
    const handleVisitedCountries = (country)=>{
        console.log('clicked');
        console.log(country);
    }

    return (
        <div style={{
            border: '2px solid gold',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
            <h2>In the Countries: {countries.length}</h2>
            <h3>Total Country Visited: </h3>
            <div  id='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;