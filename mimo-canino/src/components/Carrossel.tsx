import Carousel from 'react-bootstrap/Carousel';
import Img from 'react-image';

import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt=""
        />
        <Carousel.Caption>
          <h3>Os melhores produtos!</h3>
          <p>Contato direto com o produtor.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt=""
        />

        <Carousel.Caption>
          <h3>Banhos e tosas agendas!</h3>
          <p>Acesso rápido ao agendamento de banhos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt=""
        />

        <Carousel.Caption>
          <h3>Acompanhamento de primeira com o TaxiDog</h3>
          <p>
            Transporte seguro e rápido para seu melhor amigo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;