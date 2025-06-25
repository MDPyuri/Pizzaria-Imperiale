import React, { useState } from 'react';
import './Crud.css';

const UpdateUser = () => {
    const [NewName, setNewName] = useState("");
    const [NewPhone, setNewPhone] = useState("");
    const [NewEmail, setNewEmail] = useState("");
    const [NewPassword, setNewPassword] = useState("");

    return (
        <section className="CrudSection">
            <div className="CrudSection-block">
                <div className="title-crud">
                    <div className="line-crud"></div>
                    <p>Atualizar</p>
                    <div className="line-crud"></div>
                </div>

                <div className="messageCrud">
                    <p>Precisa atualizar alguma informação?</p>
                    <p>Insira seu dado atualizado:</p>
                </div>

                <div className="crudData updateData">
                    <input
                        type="text"
                        placeholder="Nome completo:"
                        className="inputCrud"
                    />
                    <input
                        type="text"
                        placeholder="Telefone:"
                        className="inputCrud"
                    />
                    <input
                        type="email"
                        placeholder="Email:"
                        className="inputCrud"
                    />
                    <input
                        type="password"
                        placeholder="Senha:"
                        className="inputCrud"
                    />
                </div>

                <button className="btn-crud">Atualizar dados</button>
            </div>
        </section>
    );
};

export default UpdateUser;
