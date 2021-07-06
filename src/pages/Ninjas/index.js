import React, {useState, useEffect} from 'react';

import api from '../../services/api'

export default function Ninjas() {

    const [ninjas, setNinjas] = useState([]);

    useEffect(() =>{
        api.get('/Naruto/asc/20/1')
        .then(response => {
            setNinjas(response.data.list)
        })
    });

    return (
        <div className="ninja-container">
            <h1>Registered Ninjas</h1>
            <ul>
                {ninjas.map(ninja =>(
                    <li key={ninja.id}>
                        <strong>Name:</strong>
                        <p>{ninja.name}</p>
                        <strong>Village:</strong>
                        <p>{ninja.village}</p>
                        <strong>Rank:</strong>
                        <p>{ninja.rank}</p>

                    </li>
                ))}
            </ul>
        </div>
    )
}