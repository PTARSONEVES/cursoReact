import { useState } from 'react';
import './Formulario.css';

const Formulario = ({user}) => {
    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [biografia, setBiografia] = useState(user ? user.biografia : "");
    const [opcao, setOpcao] = useState(user ? user.opcao : "escolha...");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Enviando o formulário!');
        console.log('           Nome: ',name);
        console.log('         E-mail: ',email);
        console.log('      Biografia: ',biografia);
        console.log('Opção escolhida: ',opcao);

        setName("");
        setEmail("");
        setBiografia("");
        setOpcao("escolha...");
    }


  return (
    <div>
        {/* Criação do Formulário */}
        <form onSubmit={handleSubmit}>
            {/* Alteração de Dados com função externa */}
            <label htmlFor='name'>
                <span>Nome</span>
                <input
                    type="text"
                    name='name'
                    placeholder='Digite seu nome'
                    onChange={handleName}
                    value={name}
                />
            </label>
            {/* Alteração co função inline */}
            <label>
                <span>E-mail</span>
                <input
                    type='email'
                    name='email'
                    placeholder='Digite seu e-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
               <span>biografia:</span>
               <textarea 
                name='biografia' 
                placeholder='Descrição do usuário' 
                onChange={(e) => setBiografia(e.target.value)} 
                value={biografia} 
                >
                </textarea> 
            </label>
            <label>
                <span>Selecionar Opção</span>
                <select name='opcao' onChange={(e) => setOpcao(e.target.value)} value={opcao}>
                    <option value="">escolha...</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Cliente">Cliente</option>
                    <option value="Visitante">Visitante</option>
                    <option value="Colaborador">Colaborador</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Formulario;