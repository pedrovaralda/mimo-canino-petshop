import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function FormConsultas() {
  return (
    <>
      <Form action='/' method="get">
        <Form.Label htmlFor="nome">Seu Nome</Form.Label>
        <Form.Control
          type="text"
          id="inputTextName"
          aria-describedby="textName"
        />
        <Form.Label htmlFor="nomePet">Nome do Pet</Form.Label>
        <Form.Control
          type="text"
          id="inputTextNamePet"
          aria-describedby="textNamePet"
        />
        <Form.Label htmlFor="telefone">Telefone para contato</Form.Label>
        <Form.Control
          type="number"
          id="inputTextNumber"
          aria-describedby="textNumber"
        />
        <Form.Label htmlFor="raça">Raça do Pet</Form.Label>
        <Form.Control
          type="text"
          id="inputTextNameRaça"
          aria-describedby="textNameRaça"
        />
        <Form.Label htmlFor="raça">Data</Form.Label>
        <Form.Control
          type="date"
          id="inputTextDate"
          aria-describedby="textDate"
        />
        <Row className="g-2">
          <Col md>
            <Form.Label htmlFor="Email">Email</Form.Label>
            <Form.Control
              type="email"
              id="inputTextEmail"
              aria-describedby="textNameEmail"
            />
          </Col>
          <Col md>
            <Form.Label htmlFor="portePet">Porte do Pet</Form.Label>
            <Form.Select aria-label="Floating label select example">
              <option>Selecione o Porte do Pet</option>
              <option value="1">Extra pequeno</option>
              <option value="2">Pequeno</option>
              <option value="3">Médio</option>
              <option value="4">Grande</option>
              <option value="5">Extra Grande</option>
            </Form.Select>
          </Col>
        </Row>
        <FloatingLabel controlId="observacoes" label="Observações">
          <Form.Control
            as="textarea"
            placeholder="Alguma observação?"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <Button id='botao-banho' type="submit" variant='dark'>Agendar Consulta</Button>
      </Form>
    </>
  );
}

export default FormConsultas;