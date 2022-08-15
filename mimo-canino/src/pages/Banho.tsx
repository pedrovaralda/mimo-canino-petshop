import '../pages/Banho.css';
import BarraTop from '../components/BarraTop';
import { Img } from 'react-image';
import BarraBottom from '../components/BarraBottom';
import FormBanho from '../components/FormBanho';

import logo from '../assets/logo200.png';

export function Banho() {
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
          <h1>Agende seu banho</h1>
        </div>
      </section>

      <section id='forms'>
        <div id='form-banho'>
          <FormBanho />
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