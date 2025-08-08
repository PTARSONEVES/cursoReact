import { Button, Form } from 'react-bootstrap';
import { useFetch } from '../../hooks/useFetch';


const CadReservas = () => {
    
    function Url(rota) {
        const urlBase = 'http://localhost:3001/'
        return urlBase+rota
    }

    function Ufs() {
        const { data: items, loading, error } = useFetch(Url('ufs'));
        return {items, loading, error }
    }

    function Cidades(ufid) {
        const { data: items, loading, error } = useFetch(Url('municipios/0/'+ufid));
        return {items, loading, error}
    }

    let ufItems = [];

    const ufs = Ufs();
    if (ufs !== null) {
        console.log(ufs)
        ufItems = ufs.items
    };

    let cityItems = [];
    let ufid = 26;
    const cidades = Cidades(ufid);
    if (cidades !== null) {
        console.log(cidades)
        cityItems = cidades.items
    };



    return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder='Digite o e-mail'/>
                    <Form.Text>We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='password'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Unidades da Federação</Form.Label>
                    <Form.Select>
                        <option>Escolha a UF</option>
                        {ufItems && ufItems.map((ufItem, i) =>
                            <option obj={ufItem} key={i} value={ufItem.id}>{ufItem.ufname}</option>
                        )}
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Municípios</Form.Label>
                    <Form.Select>
                        <option>Escolha o Município</option>
                        {cityItems && cityItems.map((cityItem, i) =>
                            <option obj={cityItem} key={i} value={cityItem.id}>{cityItem.cityname}</option>
                        )}
                    </Form.Select>
                </Form.Group>
                <Button variant='primary' type="submit">Submit</Button>
            </Form>
    );

}

export default CadReservas;