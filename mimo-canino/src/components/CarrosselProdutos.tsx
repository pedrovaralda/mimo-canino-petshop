import Carousel from 'react-bootstrap/Carousel';
import Img from 'react-image';

import produto1 from '../assets/produto1.jpg';
import produto2 from '../assets/produto2.jpg';
import produto3 from '../assets/produto3.jpg';
import produto4 from '../assets/produto4.jpg';
import produto5 from '../assets/produto5.jpg';

function CarrosselProdutos() {
  return (
    <Carousel id='carrossel-produtos'>
      <Carousel.Item>
        <a href='/'><img
          className="d-block w-100"
          src={produto1}
          alt=""
        /></a>
        <p>Pedigree Adulto 10kg <span>R$37.90</span></p>

      </Carousel.Item>
      <Carousel.Item>
        <a href='/'><img
          className="d-block w-100"
          src={produto2}
          alt=""
        /></a>
        <p>Fórmula Natural filhotes 10kg <span>R$29.90</span></p>
      </Carousel.Item>
      <Carousel.Item>
        <a href='/'><img
          className="d-block w-100"
          src={produto3}
          alt=""
        /></a>
        <p>Balance Adultos 5kg <span>R$14.90</span></p>
      </Carousel.Item>
      <Carousel.Item>
        <a href='/'><img
          className="d-block w-100"
          src={produto4}
          alt=""
        /></a>
        <p>Royale Canin Extra Pequenos 5kg <span>R$39.90</span></p>
      </Carousel.Item>
      <Carousel.Item>
        <a href='/'><img
          className="d-block w-100"
          src={produto5}
          alt=""
        /></a>
        <p>Número 1 Adultos 10kg <span>R$27,90</span></p>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselProdutos;