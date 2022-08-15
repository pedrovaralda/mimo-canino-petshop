import '../pages/Index.css';
import BarraTop from '../components/BarraTop';
import Cartoes from '../components/Cartões';
import Carrossel from '../components/Carrossel';
import Cartao2 from '../components/Cartão2';
import Cartao3 from '../components/Cartão3';
import { Img } from 'react-image';

import logoImg from '../assets/logoImg.png';
import logo from '../assets/logo.png';
import ListaBotoes from '../components/ListaBotões';
import BarraBottom from '../components/BarraBottom';
import BarraPesquisa from '../components/BarraPesquisa';
import CarrosselProdutos from '../components/CarrosselProdutos';
import Cartao4 from '../components/Cartão4';

export function Index() {
  return (
    <body>
      <header>
        <BarraTop />
      </header>
      <div id='first-content'>
        <img src={logoImg} alt="" className='logoPrincipal' />
        <BarraPesquisa />
      </div>
      <section id='destaques'>
        <div id='ofertas'>
          <h2>Produtos em destaque</h2>
          <CarrosselProdutos />
        </div>
      </section>
      <div id='carrossel-primary'>
        <Carrossel />
      </div>
      <div id='primary-content'>
        <Cartoes />
        <Cartao2 />
        <Cartao3 />
        <Cartao4 />
      </div>
      <div id='second-content'>
        <h2>Conheça nossos valores!</h2>
        <img id='img-container' src={logo} />
      </div>
      <div id='third-content'>
        <ListaBotoes />
      </div>
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