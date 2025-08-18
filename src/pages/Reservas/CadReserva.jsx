import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';


const CadReservas = () => {

    let dia = new Date(Date.now());
    const urlPais = 'paises';
    const [urlUf, setUrlUf] = useState('ufs/0/30000');
    const [urlCity, setUrlCity] = useState('municipios/0/30');
    const [checkin, setCheckin] = useState(dia);
    const [checkout, setCheckout] = useState(checkin.setDate(dia.getDate()+1));

    function Url(rota) {
        const urlBase = 'http://localhost:3001/'
        return urlBase+rota
    }

    function Consultas(urlConsulta) {
        const { data: items, loading, error } = useFetch(Url(urlConsulta));
        return {items, loading, error }
    }

    let paisItems = [];
    let ufItems = [];
    let cityItems = [];

    const paises = Consultas(urlPais);
    if (paises !== null) {
        paisItems = paises.items;
    }

    const ufs = Consultas(urlUf);
    if (ufs !== null) {
        ufItems = ufs.items
    };

    const cidades = Consultas(urlCity);
    if (cidades !== null) {
        cityItems = cidades.items
    };

    const handleChangeSelect = (e) => {
        e.preventDefault();
        let opcao = e.currentTarget.value.toString();
        let campo = e.currentTarget.name;
        switch (campo) {
            case 'paises':
                setUrlUf('ufs/0/'+opcao);
                break;
            case 'uf':
                setUrlCity('municipios/0/'+opcao);
                break;
            case 'city':
//                setUrlCity('municipios/0/'+opcao);
                break;
            case 'checkin':
                setCheckin(checkin);
                break;
            case 'checkout':
                setCheckout(checkout);
                break;
            default: break;
        }
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
                        <Form.Control name="checkin" type="date" placeholder='Check-in' onChange={handleChangeSelect}/>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Data de saida</Form.Label>
                        <Form.Control name="checkout" type="date" placeholder='Check-out' onChange={handleChangeSelect}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='g-3'>
                <Col md>
                    <Form.Group className='mb-3'>
                        <Form.Label>Pais de Origem</Form.Label>
                        <Form.Select onChange={handleChangeSelect} name="paises">
                            <option selected>Escolha o País</option>
                            {paisItems && paisItems.map((paisItem, i) =>
                                <option obj={paisItem} key={i} value={paisItem.id}>{paisItem.paisname}</option>
                            )}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className='mb-3'>
                        <Form.Label>Estado de Origem</Form.Label>
                        <Form.Select onChange={handleChangeSelect} name="uf">
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
                        <Form.Select onChange={handleChangeSelect} name="city">
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