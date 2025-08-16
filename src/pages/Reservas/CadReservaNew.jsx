import { Button, Col, Form, Row } from 'react-bootstrap';
//import { useFetch } from '../../hooks/useFetch';
import { CReserva } from '../../hooks/CReserva';
import { useState } from 'react';


const CadReservas = () => {

/*    let dia = new Date(Date.now());
    const urlPais = 'paises';
    const [urlUf, setUrlUf] = useState('ufs/0/30000');
    const [urlCity, setUrlCity] = useState('municipios/0/30');
//    const [checkin, setCheckin] = useState(dia);
//    const [checkout, setCheckout] = useState(checkin.setDate(dia.getDate()+1));

//    console.log('dia: ',dia);
//    console.log('in: ',checkin);
//    console.log('out: ',checkout);

    function Url(rota) {
        const urlBase = 'http://localhost:3001/'
        return urlBase+rota
    }

    function Paises() {
        const { data: items, loading, error } = useFetch(Url(urlPais));
        return {items, loading, error }
    }

    function Ufs() {
        const { data: items, loading, error } = useFetch(Url(urlUf));
        return {items, loading, error }
    }

    function Cidades() {
        const { data: items, loading, error } = useFetch(Url(urlCity));
        return {items, loading, error}
    }
*/
    const [paisItems, setPaisItems] = useState(CReserva('paises'));
    const [ufItems, setUfItems] = useState([]);
    const [cityItems, setCityItems] = useState([]);

//    setPaisItems(CReserva('paises'));

    console.log('paisItems: ', paisItems);
    //CReserva('paises');
/*
    const paises = Paises();
    if (paises !== null) {
        paisItems = paises.items;
    }

    const ufs = Ufs();
    if (ufs !== null) {
        ufItems = ufs.items
    };

    const cidades = Cidades();
    if (cidades !== null) {
        cityItems = cidades.items
    };
*/
    const handleChangeSelect = (e) => {
        e.preventDefault();
        let opcao = e.currentTarget.value.toString();
        let campo = e.currentTarget.name.toString();
        console.log('campo: ', campo, 'opcao: ', opcao);
        switch (campo) {
            case 'paises':
                setPaisItems(CReserva('paises'));
                setUfItems(CReserva('ufs/0/'+opcao));
                break;
            case 'uf':
                setUfItems(CReserva('ufs/0/'+opcao));
                break;
            case 'city':
                setCityItems(CReserva('municipios/0/'+opcao));
                break;
            default: break;
        }
    };
/*
    const handleChangePais = (e) => {
        e.preventDefault();
        let codpais = e.currentTarget.value.toString();
        setUrlUf('ufs/0/'+codpais);
    };

    const handleChangeCity = (e) => {
        e.preventDefault();
        let codmun = e.currentTarget.value.toString();
//        setCheckin(checkin);
        setUrlCity('municipios/0/'+codmun);
    };
*/
    const handleChangeCheckin = (e) => {
        e.preventDefault();
//        setCheckin(checkin);
//        setCheckout(checkin.getDate()+1);
    };

    const handleChangeCheckout = (e) => {
        e.preventDefault();
//        setCheckout(checkout);
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder='Digite o e-mail'/>
                <Form.Text>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Row className='g-4'>
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Data de chegada</Form.Label>
                        <Form.Control name="checkin" type="date" placeholder='Check-in' onChange={handleChangeCheckin}/>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Data de saida</Form.Label>
                        <Form.Control name="checkout" type="date" placeholder='Check-out' onChange={handleChangeCheckout}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='g-3'>
                <Col md>
                    <Form.Group className='mb-3'>
                        <Form.Label>Pais de Origem</Form.Label>
                        <Form.Select name='paises' onChange={handleChangeSelect}>
                            <option selected>Escolha o País</option>
                            {paisItems && paisItems.map((paisItem, i) =>
                                <option obj={paisItem} key={i} value={paisItem.id} name='teste'>{paisItem.paisname}</option>
                            )}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className='mb-3'>
                        <Form.Label>Estado de Origem</Form.Label>
                        <Form.Select name='uf' onChange={handleChangeSelect}>
                            <option selected>Escolha a UF</option>
                            {ufItems && ufItems.map((ufItem, i) =>
                                <option obj={ufItem} key={i} value={ufItem.id}>{ufItem.ufname}</option>
                            )}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className='mb-3'>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Select name='city' onChange={handleChangeSelect}>
                            <option selected>Escolha o Município</option>
                            {cityItems && cityItems.map((cityItem, i) =>
                                <option obj={cityItem} key={i} value={cityItem.id}>{cityItem.cityname}</option>
                            )}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant='primary' type="submit">Submit</Button>
        </Form>
    );

}

export default CadReservas;