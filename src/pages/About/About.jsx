//import { useCounterContext } from '../../hooks/useCounterContext';
//import { useTitleColorContext } from '../../hooks/useTitleColorContext';
//import ChangeCounter from '../../context/Counter/ChangeCounter';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
//  const { counter } = useCounterContext();
//  const { color } = useTitleColorContext();

  return (
    <div className={styles.about}>
      <h2>
        Sobre o Curso <span>React</span>
      </h2>
      <p>
        Este projeto visa montar um modelo básico feito com react no front-end e no back-end, firebase e Mysql.
      </p>
      <Link to='/' className='btn'>Acessar</Link>
{/*
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
*/}
    </div>
  )
}

export default About;