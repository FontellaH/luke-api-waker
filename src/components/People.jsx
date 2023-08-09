import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function People() {
    const [person, setPerson] = useState('');
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        // .then(response => console.log(response))
        .then(response => setPerson(response.data))
        .catch ( err => console.log(err));
    }, [id]);

    if (error) {
        return (
            <div>
                <h2>Error: These aren't the droids you're looking for</h2>
                <img
                src="https://src\components\images1.jpeg"
                alt="Obi-Wan Kenobi"
                />
            </div>
        );
    }

    if (!person) {
        return <div>Still Searching...</div>  //
    }
    console.log(person);
    return (
        <div>
            <h2>Name: {person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>

        </div>
    )
}
export default People;