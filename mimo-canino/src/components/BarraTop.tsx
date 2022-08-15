import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Img from 'react-image';

import logo from '../assets/logo.png';
import usuario from '../assets/do-utilizador.png';

function BarraTop() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Mimo Canino Pet Shop
            <Navbar.Text id='login'>
              <img src={usuario} id='navbar-icons'></img> <a href="/">Lilian Fernanda</a>
            </Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraTop;