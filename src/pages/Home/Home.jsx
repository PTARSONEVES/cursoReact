import { useCounterContext } from '../../hooks/useCounterContext';
import { useTitleColorContext } from '../../hooks/useTitleColorContext';
import ChangeCounter from '../../context/Counter/ChangeCounter';
import styles from './Home.module.css';

const Home = () => {
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default Home;