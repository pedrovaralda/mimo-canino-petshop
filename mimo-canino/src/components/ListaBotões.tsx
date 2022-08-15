import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ListaBotoes() {
  return (
    <ButtonGroup vertical>
      <Button variant='dark'>Paixão pelos animais</Button>
      <Button variant='dark'>Qualidade de atendimento e produtos</Button>
      <Button variant='dark'>Benefícios para clientes</Button>
      <Button variant='dark'>Criatividade</Button>
      <Button variant='dark'>Disciplina</Button>
      <Button variant='dark'>Foco em inovações</Button>
    </ButtonGroup>
  );
}

export default ListaBotoes;