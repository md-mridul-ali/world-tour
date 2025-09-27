import React, {useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    // console.log(country.capital.capital[0]);
    const [visited, setVisited] = useState(false);

 const handleVisited = () =>{
    // console.log('btn clicked');
    // toggle system
    // basic system
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }
    // second system
    // setVisited(visited ? false : true);
    // third system
    setVisited(!visited)
 }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Area: {country.area.area}{country.area.area > 300000 ? ' Big Country'
            : ' Small Country'}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'Not Visited'
                }
            </button>
            
            
        </div>
    );
};

export default Country;


/***
 * 
 * We can use css 4 ways in react
 * 1.Inline css (using style object)
 * 2.External css
 * 3.tailwind
 * 4.block level
 * 
 */