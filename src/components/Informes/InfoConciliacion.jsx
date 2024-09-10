import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table, Row, Col } from "react-bootstrap";

const InfoConciliacion = () => {
  return (
    <div className="p-3">
      <Form>
        <Row className="mb-3">
          <Col md={2}>
            <Form.Group controlId="fechaInicio">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="text" placeholder="dd-mm-aaaa" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="fechaFin">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control type="text" placeholder="dd-mm-aaaa" />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Form.Group controlId="areaCheckbox">
              <Form.Check type="checkbox" label="Área" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="areaSelect">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control as="select">
                <option>Todos</option>
              </Form.Control>
            </Form.Group>
          </Col>
          {/* Otros filtros */}
          <Col md={2}>
            <Form.Group controlId="especieCheckbox">
              <Form.Check type="checkbox" label="Especie" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="especieSelect">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control as="select">
                <option>Todos</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button variant="success" className="mt-4">Consultar</Button>
          </Col>
          <Col md={2}>
            <Button variant="outline-success" className="mt-4">Descargar Excel</Button>
          </Col>
        </Row>
      </Form>

      <Table bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Cancha</th>
            <th>Fecha</th>
            <th>Tipo producto</th>
            <th>Tipo inventario</th>
            <th>Proceso</th>
            <th>Producción acumulada</th>
            <th>Saldo inicial</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Todos</td>
            <td>Todos</td>
            <td>dd-mm-aaaa</td>
            <td>Todos</td>
            <td>001524</td>
            <td>dd-mm-aaaa 00:00:00</td>
            <td>dd-mm-aaaa 00:00:00</td>
          </tr>
          {/* Otras filas */}
        </tbody>
      </Table>
    </div>
  );
};

export default InfoConciliacion;
