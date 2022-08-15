import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import card1 from '../assets/cards1.jpg';

function Cartoes() {
  return (
    <Card style={{ width: '18em', margin: '0 auto', }}>
      <Card.Img variant="top" src={card1} style={{ height: 'auto', margin: '25px 25px 25px 45px' }} />
      <Card.Body>
        <Card.Title>Seu amigo muito mais feliz</Card.Title>
        <Card.Text>
          Venha cuidar do seu melhor amigo com a gente!
        </Card.Text>
        <Button id="btn" href="/banho" variant='dark'>Agende seu banho</Button>
      </Card.Body>
    </Card >
  );
}

export default Cartoes;