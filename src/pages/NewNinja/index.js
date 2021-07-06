import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewNinja() {

    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [village, setVillage] = useState('');
    const [rank, setRank] = useState('');

    const { ninjaId } = useParams();

    const history = useHistory();

    useEffect(() => {
        if(ninjaId === '0') return;
        else LoadNinja();
    }, ninjaId);

    async function LoadNinja() {
        try {
            const response = await api.get(`Naruto/${ninjaId}`);

            setId(response.data.id);
            setName(response.data.name);
            setVillage(response.data.village);
            setRank(response.data.rank);

        } catch (err) {
            alert('Error recovering ninja! Try again!')
            history.push('/');
        }
    }

    async function SaveOrUpdate(e) {
        e.preventDefault();

        const data = {
            name,
            village,
            rank
        };

        try {
            if(ninjaId === '0') {
                await api.post('Naruto/', data);
            } else {
                data.id = id;
                await api.put('Naruto/', data);
            }

        } catch (err) {
            alert('Erorr while recording ninja! Try again!')
        }
        history.push('/')
    }


    return (
        <div className="new-ninja-container">
            <div className="content">
                <section className="form">
                    <h1>{ninjaId === '0' ? 'Add new' : 'Update'} ninja</h1>
                    <p>Enter the ninja information and click on {ninjaId === '0' ? `'Add'` : `'Update'`}!</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#251fc5" />
                        Home
                    </Link>
                </section>
                <form on onSubmit={SaveOrUpdate}>
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input
                        placeholder="Village"
                        value={village}
                        onChange={e => setVillage(e.target.value)} />
                    <input
                        placeholder="Rank"
                        value={rank}
                        onChange={e => setRank(e.target.value)} />

                    <button className="button" type="submit">{ninjaId === '0' ? 'Add' : 'Update'}</button>
                </form>
            </div>
        </div>
    );
}