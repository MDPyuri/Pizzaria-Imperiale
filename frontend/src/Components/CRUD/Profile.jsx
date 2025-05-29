import React, { useState } from 'react';
import './Crud.css';

const UserProfile = () => {
    return (
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

                <div className="crudData profileData">
                    <p className="item-profile">Nome completo:</p>
                    <p className="item-profile">Telefone:</p>
                    <p className="item-profile">CPF:</p>
                    <p className="item-profile">Email:</p>
                </div>

                <div className="buttons-profile">
                    <button className="btn-crud">Atualizar</button>
                    <button className="btn-crud">Deletar</button>
                    <button className="btn-crud">Sair</button>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
