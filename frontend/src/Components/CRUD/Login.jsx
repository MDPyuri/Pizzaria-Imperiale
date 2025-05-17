import React from 'react';
import './Crud.css';

const UserLogin = () => {
    return (
        <section className="CrudSection">
            <div className="CrudSection-block">
                <div className="title-crud">
                    <div className="line-crud"></div>
                    <p>Login</p>
                    <div className="line-crud"></div>
                </div>

                <div className="messageCrud">
                    <p>
                        O primeiro passo para uma experiência única: faça seu
                        login!
                    </p>
                </div>

                <div className="crudDate">
                    <input
                        type="text"
                        placeholder="Email:"
                        className="inputCrud"
                    />
                    <input
                        type="password"
                        placeholder="Senha:"
                        className="inputCrud"
                    />
                </div>

                <button className="btn-crud">Entrar</button>

                <p className="messageToRegister">
                    Ainda não tem conta? Faça seu cadastro
                </p>
            </div>
        </section>
    );
};

export default UserLogin;
