import React, {useState} from 'react'

import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description, 
            value
        };

        try {
            await api.post('/incidents', data, {headers: { Authorization: ongId}});

            history.push('/profile');
        }catch (err) {
            alert('Erro ao criar caso');
        }
    }

    return (
        <div className="newincident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastrar novo caso</h1>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sed ullam quibusdam eaque quisquam dolorem, eum, a iure repellendus cumque ut? Soluta, autem dolorum optio maxime inventore repudiandae aliquid? Unde.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para homepage
                    </Link>
                
                </section>
                <form onSubmit={e => handleNewIncident(e)}>
                    <input type="text" 
                        placeholder="Título do caso"
                        value = {title}
                        onChange= {e => setTitle(e.target.value)}
                    />
                    <textarea name="Descrição" 
                        placeholder="Descrição" 
                        value = {description}
                        onChange= {e => setDescription(e.target.value)}   
                    />
                    <input 
                        placeholder="Valor em reais"
                        value = {value}
                        onChange= {e => setValue(e.target.value)}
                    />
                    

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}