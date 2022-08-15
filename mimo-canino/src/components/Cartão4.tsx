import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import veterinario from '../assets/veterinario.jpg';

// Cartão referente ao TaxiDog

function Cartao4() {
  return (
    <Card style={{ width: '18em', margin: '0 auto' }}>
      <Card.Img variant="top" src={veterinario} style={{ height: 'auto', margin: '25px 25px 25px 45px' }} />
      <Card.Body>
        <Card.Title>Consultas</Card.Title>
        <Card.Text>
          Agende sua consulta com um de nossos veterinários agora mesmo!
        </Card.Text>
        <Button id="btn" href="/consultas" variant='dark'>Agendar!</Button>
      </Card.Body>
    </Card>
  );
}

export default Cartao4;