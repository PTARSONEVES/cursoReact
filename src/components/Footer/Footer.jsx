import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <Navbar expand="lg" fixed="bottom" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <h3 className={styles.footer}>Referência de React</h3>
                <p className={styles.footer}>CursoReact &copy; 2025</p>
            </Container>
        </Navbar>
    );
};

export default Footer;