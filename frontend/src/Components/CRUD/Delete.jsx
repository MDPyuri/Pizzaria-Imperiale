import React from 'react';
import './Crud.css';

const DeleteUser = () => {
    return (
        <section className="CrudSection">
            <div className="CrudSection-block">
                <div className="title-crud">
                    <div className="line-crud"></div>
                    <p>Deletar conta</p>
                    <div className="line-crud"></div>
                </div>

                <div className="messageCrud">
                    <p>Se decidir voltar, estaremos de portas abertas!</p>
                    <p>Confirme seus dados para seguir com a exclusão.</p>
                </div>

                <div className="crudData deleteData">
                    <input
                        type="text"
                        placeholder="CPF:"
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

                <button className="btn-crud">Excluir</button>
            </div>
        </section>
    );
};

export default DeleteUser;
