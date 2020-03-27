import React, {useState} from 'react';

import api from '../../services/api';

import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'



import './styles.css'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState(''); 

    const history = useHistory();


    async function handleRegister(event) {
        event.preventDefault();



        const data = {
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        }
        console.log(data);
        try {
            const response = await api.post('/ongs', data);
            alert(`Seu id de acesso: ${response.data.id}`);

            history.push('/');
        }
        catch (err) {
            alert('Erro no cadastro: ' + err);
        }
    }

    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastro</h1>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sed ullam quibusdam eaque quisquam dolorem, eum, a iure repellendus cumque ut? Soluta, autem dolorum optio maxime inventore repudiandae aliquid? Unde.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                
                </section>
                <form onSubmit={handleRegister}>
                    <input type="text" value={name} onChange={ (event) => setName(event.target.value)} placeholder="Nome da ONG"/>
                    <input type="email" value={email} onChange={ (event) => setEmail(event.target.value)}placeholder="Email"/>
                    <input type="text" value={whatsapp} onChange={ (event) => setWhatsapp(event.target.value)} placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input type="text" value={city} onChange={ (event) => setCity(event.target.value)} placeholder="Cidade"/>
                        <input type="text" value={uf} onChange={ (event) => setUF(event.target.value)} placeholder="UF" style={{width:80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}