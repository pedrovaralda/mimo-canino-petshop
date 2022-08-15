import BarraTop from '../components/BarraTop';
import { Img } from 'react-image';
import BarraBottom from '../components/BarraBottom';
import FormTaxi from '../components/FormTaxi';

import logo from '../assets/logo200.png';

export function TaxiDog() {
  return (
    <body>
      <header>
        <BarraTop />
      </header>

      <div id='logo-top'>
        <img src={logo}></img>
      </div>

      <section id='titulo'>
        <div id='titulo'>
          <h1>Solicite seu taxi dog</h1>
        </div>
      </section>

      <section id='forms'>
        <div id='form-banho'>
          <FormTaxi />
        </div>
      </section>

      <section id='bottom'>
        <div id='last-content'>
          <BarraBottom />
        </div>
      </section>
      <div id='direitos'>
        <p>Todos os direitos reservados a MIMO CANINO LTDA® 2022.</p>
      </div>
    </body >
  )
}