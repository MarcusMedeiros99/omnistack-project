import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import {FiLogIn} from 'react-icons/fi';

import './styles.css'

import api from '../../services/api'


import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'

export default  function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch (err) {
            alert('Falha no login');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input type="text"  value={id} onChange={ (e) => setId(e.target.value)} placeholder="Sua ID" />
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        
            <section >
                <img src={heroesImg} alt="Heroes"/>
            </section>
        </div>
    );
}