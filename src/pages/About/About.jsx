import { useCounterContext } from '../../hooks/useCounterContext';
import { useTitleColorContext } from '../../hooks/useTitleColorContext';
import ChangeCounter from '../../context/Counter/ChangeCounter';
import styles from './About.module.css';

const About = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default About