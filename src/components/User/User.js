import React from 'react';
import styles from './User.module.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const User = ({
  id,
  name,
  email,
  firstSurname,
  secondSurname,
  rut,
  bday,
  personalPhone,
  club,
  address,
  corpPhone,
  website,
  handleRemoveUser
}) => {
  const history = useNavigate();
  return (
    <Container>
      <hr style={{width: 0}}/>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card style={{ width: '35rem' }} className={styles.User}>
            <Card.Body>
              <Card.Title style={{padding: '10px'}}>{name} {firstSurname} {secondSurname}</Card.Title>
              <div className="user-details">
                <div>Rut: {rut} </div>
                <div>Correo: {email}</div>
                <div>Fecha de nacimiento: {new Date(bday).toDateString()} </div>
                <div>Teléfonos: {personalPhone} | {corpPhone} </div>
                <div>Dirección: {address} </div>
                <div>Club: {club} </div>
                <div>Website: {website} </div>
              </div>
              <hr style={{width: 0}}/>
              <Button variant="primary" onClick={() => history(`/edit/${id}`)}> Editar </Button>{' '}
              <Button variant="danger" onClick={() => handleRemoveUser(id)}> Eliminar </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

User.propTypes = {};

User.defaultProps = {};

export default User;