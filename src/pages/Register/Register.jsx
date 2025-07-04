import { useAuthetication } from '../../hooks/useAuthentication';
import styles from './Register.module.css';

import React, { useState, useEffect } from 'react'

function Register() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const {createUser, error: authError, loading} = useAuthetication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword) {
      setError('As senhas precisam ser iguais!');
      console.log('erro:',error);
      return;
    }

    const res = await createUser(user);

    console.log(res);

  };
  
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  
  return (
    <div className={styles.register}>
      <h1>Cadastro de Usuário</h1>
      <p>Crie seu usuário e desfrute dos nossos dados</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input 
            type='text'
            name='displayname'
            required
            placeholder='Digite o nome do usuario' 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail</span>
          <input 
            type='email'
            name='email'
            required
            placeholder='Digite o e-mail do usuario' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
       </label>
        <label>
          <span>Senha</span>
          <input 
            type='password'
            name='password'
            required
            placeholder='Digite a senha do usuario' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirme a senha</span>
          <input 
            type='password'
            name='confirmPassword'
            required
            placeholder='Confirme a senha' 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && (
          <button className='btn' disabled>
            Aguarde...
          </button>)}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Register;