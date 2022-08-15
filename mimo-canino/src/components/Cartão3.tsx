import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import taxi from '../assets/taxi.jpg';

// Cartão referente ao TaxiDog

function Cartao3() {
  return (
    <Card style={{ width: '18em', margin: '0 auto' }}>
      <Card.Img variant="top" src={taxi} style={{ height: 'auto', margin: '25px 25px 25px 45px' }} />
      <Card.Body>
        <Card.Title>TaxiDog</Card.Title>
        <Card.Text>
          Um método de transporte seguro e rápido para seu pet, peça já!
        </Card.Text>
        <Button id="btn" href="/taxidog" variant='dark'>Solicite agora!</Button>
      </Card.Body>
    </Card>
  );
}

export default Cartao3;