import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import card2 from '../assets/cards2.jpg';

// Cartão referente aos produtos  

function Cartao2() {
  return (
    <Card style={{ width: '18em', margin: '0 auto' }}>
      <Card.Img variant="top" src={card2} style={{ height: 'auto', margin: '25px 25px 25px 45px' }} />
      <Card.Body>
        <Card.Title>Confira nossos produtos!</Card.Title>
        <Card.Text>
          As melhores marcas do mercado para seu pet ficar feliz!
        </Card.Text>
        <Button id="btn" href="/produtos" variant='dark'>Produtos</Button>
      </Card.Body>
    </Card>
  );
}

export default Cartao2;