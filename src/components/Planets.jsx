import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PlanetInfo() {
    //decalred a state var names planet and a function name setPlanet and set the value to empty string
    const [planet, setPlanet] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)  //using get to retrieve the website
            // .then(response => console.log(response))
            .then(response => setPlanet(response.data))  // updating the information that was retrived fromthe api
            .catch(err => console.log(err))  // used catch to handle any errs that my come back from the api
    }, [id]);  // this is re-fetching for the planet once whenever the id is used

    console.log(planet);
    return (
        // //Display the name, climate, terrain, surface water and population based on the info from the swap api
        <div>
            <h2>Name: {planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default PlanetInfo;