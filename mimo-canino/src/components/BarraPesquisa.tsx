import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BarraPesquisa() {
  return (
    <>
      <Form className="d-flex" action='/' method="get">
        <Form.Control
          type="search"
          placeholder="Digite o que procura"
          className="me-2"
          aria-label="Search"
        />
        <Button type="submit" variant="dark">Procurar</Button>
      </Form>
    </>
  );
}

export default BarraPesquisa;