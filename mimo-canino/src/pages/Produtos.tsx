import '../pages/Produtos.css';
import BarraBottom from "../components/BarraBottom";
import BarraPesquisa from "../components/BarraPesquisa";
import BarraTop from "../components/BarraTop";
import logoImg from '../assets/logoImg.png';
import LinhaProdutos from "../components/LinhaProdutos";
import LinhaProdutos2 from '../components/LinhaProdutos2';

export function Produtos() {
    return (
        <body>
            <header>
                <BarraTop />
            </header>

            <div id='first-content'>
                <img src={logoImg} alt="" className='logoPrincipal' />
                <BarraPesquisa />
            </div>


            <div id="products">
                <h1>Rações</h1>
                <LinhaProdutos />
            </div>

            <div id='toys'>
                <h1>Petiscos e acessórios</h1>
                <LinhaProdutos2 />
            </div>

            <section id='bottom'>
                <div id='last-content'>
                    <BarraBottom />
                </div>
            </section>
            <div id='direitos'>
                <p>Todos os direitos reservados a MIMO CANINO LTDA® 2022.</p>
            </div>
        </body>
    )
}