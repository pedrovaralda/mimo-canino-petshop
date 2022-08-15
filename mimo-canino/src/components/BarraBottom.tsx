import Nav from 'react-bootstrap/Nav';
import Img from 'react-image'
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import whatsapp from '../assets/whatsapp.png';
import instagram from '../assets/instagram.png';
import endereço from '../assets/marcador.png';

function BarraBottom() {
  return (
    <>
      <h4>Siga a gente em nossas redes sociais!</h4>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <img src={facebook} id='icons'></img>
          <Nav.Link href="">Facebook</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src={twitter} id='icons'></img>
          <Nav.Link href="">Twitter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src={instagram} id='icons'></img>
          <Nav.Link href="">Instagram</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src={whatsapp} id='icons'></img>
          <Nav.Link href="">
            Whatsapp
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <br></br>
      <div id='endereço'>
        <img src={endereço} alt='' id='icons'></img>
        <p className='endereço'>Avenida Paulo Gracindo, 700 – Karaiba – Uberlândia M/G</p>
      </div>
    </>
  );
}

export default BarraBottom;