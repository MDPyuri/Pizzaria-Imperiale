import React, { useEffect, useState } from 'react';
import './Crud.css';
import HeaderSimple from '../Header/HeaderSimple';
import FooterSimple from '../Footer/FooterSimple';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [profile, setProfile] = useState({ nome: '', telefone: '', cpf: '', email: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/usuarios/me', { credentials: 'include' })
            .then(res => {
                if (!res.ok) throw new Error('Não autenticado');
                return res.json();
            })
            .then(data => {
                setProfile({
                    nome: data.nome || '',
                    telefone: data.telefone || '',
                    cpf: data.cpf || '',
                    email: data.email || ''
                });
            })
            .catch(err => setError('Erro ao carregar dados do perfil.'));
    }, []);

    const handleLogout = async () => {
        await fetch('http://localhost:3000/usuarios/logout', {
            method: 'POST',
            credentials: 'include',
        });
        navigate('/login');
    };

    return (
        <>
            <HeaderSimple />
            <section className="CrudSection">
                <div className="CrudSection-block">
                    <div className="title-crud">
                        <div className="line-crud"></div>
                        <p>Meu perfil</p>
                        <div className="line-crud"></div>
                    </div>

                    <div className="messageCrud">
                        <p>Suas informações sempre à mão</p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="crudData profileData">
                        <p className="item-profile">Nome completo: {profile.nome}</p>
                        <p className="item-profile">Telefone: {profile.telefone}</p>
                        <p className="item-profile">CPF: {profile.cpf}</p>
                        <p className="item-profile">Email: {profile.email}</p>
                    </div>

                    <div className="buttons-profile">
                        <button className="btn-crud" onClick={() => navigate('/update')}>Atualizar</button>
                        <button className="btn-crud" onClick={() => navigate('/delete')}>Deletar</button>
                        <button className="btn-crud" onClick={handleLogout}>Sair</button>
                    </div>
                </div>
            </section>
            <FooterSimple />
        </>
    );
};

export default UserProfile;
