import { useAuthetication } from '../../hooks/useAuthentication';
import styles from './Login.module.css';
import React, { useState, useEffect } from 'react'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login, error: authError, loading} = useAuthetication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password
    };

    const res = await login(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça login para usar o sistema</p>
      <form onSubmit={handleSubmit}>
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
        {!loading && <button className='btn'>Entrar</button>}
        {loading && (
          <button className='btn' disabled>
            Aguarde...
          </button>)
        }
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;