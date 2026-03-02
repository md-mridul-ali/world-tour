import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)
    return (
        <div style={{
            border: '2px solid gold',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
            <h2>In the Countries: {countries.length}</h2>
            <div  id='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;