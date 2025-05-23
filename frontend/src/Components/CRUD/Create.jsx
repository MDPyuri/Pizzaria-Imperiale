import React, { useState } from 'react';
import "./Crud.css";

const CreateUser = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Função para cadastrar o usuário
    const handleSubmit = async (e) => {
        e.preventDefault(); // impede que a página recarregue ao enviar o formulário

        const userData = {
            nome: name,
            telefone: phone,
            cpf: cpf,
            email: email,
            senha: password,
        }; // recebe dados para o back

        try {
            const response = await fetch(
                'http://localhost:3000/api/usuarios/criar',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                    // transforma os dados em JSON
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log('Usuário cadastrado com sucesso!');
                console.log(data);

                // Limpar os campos após cadastro
                setName('');
                setPhone('');
                setCpf('');
                setEmail('');
                setPassword('');
            } else {
                console.log('Erro ao cadastrar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            console.log('Erro na requisição.');
        }
    }


    return (
        <section className="CrudSection">
            <div className="CrudSection-block">
                <div className="title-crud">
                    <div className="line-crud"></div>
                    <p>Cadastrar</p>
                    <div className="line-crud"></div>
                </div>

                <div className="messageCrud">
                    <p>Cadastre-se e descubra um novo sabor de sofisticação.</p>
                </div>

                <div className="crudData createData">
                    <input
                        type="text"
                        placeholder="Nome completo:"
                        className="inputCrud"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Telefone:"
                        className="inputCrud"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="CPF:"
                        className="inputCrud"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email:"
                        className="inputCrud"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha:"
                        className="inputCrud"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className="btn-crud" onClick={handleSubmit}>
                    Cadastrar
                </button>
            </div>
        </section>
    );
}

export default CreateUser;