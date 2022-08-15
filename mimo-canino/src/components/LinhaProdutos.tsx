import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Img from 'react-image';

import produto1 from '../assets/produto1.jpg';
import produto2 from '../assets/produto2.jpg';
import produto3 from '../assets/produto3.jpg';
import produto4 from '../assets/produto4.jpg';
import produto5 from '../assets/produto5.jpg';
import produto6 from '../assets/produto6.jpg';
import produto7 from '../assets/produto7.jpg';
import produto8 from '../assets/produto8.jpg';
import produto9 from '../assets/produto9.jpg';
import produto10 from '../assets/produto10.jpg';
import produto11 from '../assets/produto11.jpg';
import produto12 from '../assets/produto12.jpg';
import produto13 from '../assets/produto13.jpg';
import produto14 from '../assets/produto14.jpg';
import produto15 from '../assets/produto15.jpg';
import produto16 from '../assets/produto16.jpg';

function LinhaProdutos() {
  return (
    <CardGroup>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto1} />
        <Card.Body>
          <Card.Title>Pedigree Adulto 10kg</Card.Title>
          <Card.Text>
            R$37.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto2} />
        <Card.Body>
          <Card.Title>Fórmula Natural filhotes 10kg</Card.Title>
          <Card.Text>
            R$29.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto3} />
        <Card.Body>
          <Card.Title>Balance Adultos 5kg</Card.Title>
          <Card.Text>
            R$14.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto4} />
        <Card.Body>
          <Card.Title>Royale Canin Ext. Pequenos 5kg</Card.Title>
          <Card.Text>
            R$39.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto5} />
        <Card.Body>
          <Card.Title>Número 1 Adultos 10kg</Card.Title>
          <Card.Text>
            R$27.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto6} />
        <Card.Body>
          <Card.Title>Golden Fórmula Pequenos 3kg</Card.Title>
          <Card.Text>
            R$19.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto7} />
        <Card.Body>
          <Card.Title>Coby Adultos 18kg</Card.Title>
          <Card.Text>
            R$29.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto8} />
        <Card.Body>
          <Card.Title>Quatree Adultos 10kg</Card.Title>
          <Card.Text>
            R$49.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto9} />
        <Card.Body>
          <Card.Title>Premier Adultos 15kg</Card.Title>
          <Card.Text>
            R$39.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto10} />
        <Card.Body>
          <Card.Title>Faro Macio Adultos 10kg</Card.Title>
          <Card.Text>
            R$28.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto11} />
        <Card.Body>
          <Card.Title>Gran Plus Adultos 10kg</Card.Title>
          <Card.Text>
            R$29.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto12} />
        <Card.Body>
          <Card.Title>Special Dog Adultos 10kg</Card.Title>
          <Card.Text>
            R$24.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto13} />
        <Card.Body>
          <Card.Title>Gran Plus Pequenos 5kg</Card.Title>
          <Card.Text>
            R$29.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto14} />
        <Card.Body>
          <Card.Title>Qualidy Adultos 3kg</Card.Title>
          <Card.Text>
            R$14.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto15} />
        <Card.Body>
          <Card.Title>Golden Adultos 1kg</Card.Title>
          <Card.Text>
            R$24.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
      <a href="#"><Card>
        <Card.Img variant="top" src={produto16} />
        <Card.Body>
          <Card.Title>Gran Plus Adultos 10kg</Card.Title>
          <Card.Text>
            R$29.90
          </Card.Text>
        </Card.Body>
      </Card>
      </a>

    </CardGroup>
  );
}

export default LinhaProdutos;