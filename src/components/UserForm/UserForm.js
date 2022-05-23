import React, { useState } from 'react';
import styles from './UserForm.module.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const UserForm = (props) => {
  const [ user, setUser ] = useState(() => {
    return {
      name: props.user ? props.user.name : '',
      email: props.user ? props.user.email : '',
      firstSurname: props.user ? props.user.firstSurname : '',
      secondSurname: props.user ? props.user.secondSurname : '',
      rut: props.user ? props.user.rut : '',
      bday: props.user ? props.user.bday : '',
      personalPhone: props.user ? props.user.personalPhone : '',
      club: props.user ? props.user.club : '',
      address: props.user ? props.user.address : '',
      corpPhone: props.user ? props.user.corpPhone : '',
      website: props.user ? props.user.website : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');

  const { name, email, firstSurname, secondSurname, rut, bday, 
    personalPhone, club, address, corpPhone, website } = user;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, email, firstSurname, secondSurname, rut, bday, 
      personalPhone, club, address, corpPhone, website];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const user = {
        id: uuidv4(),
        name, email, firstSurname, secondSurname, rut, bday, 
        personalPhone, club, address, corpPhone, website
      };
      props.handleOnSubmit(user);
    } else {
      errorMsg = 'Ingrese todos los datos, por favor';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
  <div className={styles.UserForm}>
    <Container>
    <hr style={{width: 0}}/>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="name"
                value={name}
                placeholder="Federico"
                onChange={handleInputChange}
              />
            </Form.Group>
            
            <Form.Group controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                className="input-control"
                type="email"
                name="email"
                value={email}
                placeholder="Federico@gmail.com"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="firstSurname">
              <Form.Label>Apellido paterno</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="firstSurname"
                value={firstSurname}
                placeholder="Los Palotes"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="secondSurname">
              <Form.Label>Apellido materno</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="secondSurname"
                value={secondSurname}
                placeholder="Santa María"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="rut">
              <Form.Label>Rut</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="rut"
                value={rut}
                placeholder="19822458-K"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="bday">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                className="input-control"
                type="date"
                name="bday"
                value={bday}
                placeholder="01/01/1999"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="personalPhone">
              <Form.Label>Teléfono personal</Form.Label>
              <Form.Control
                className="input-control"
                type="tel"
                name="personalPhone"
                value={personalPhone}
                placeholder="+56 9 9988 7766"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="club">
              <Form.Label>Club</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="club"
                value={club}
                placeholder="Las chicas super poderosas"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Dirección de la organización</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="address"
                value={address}
                placeholder="Av. España 1680, Valparaíso"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="corpPhone">
              <Form.Label>Teléfono corporativo</Form.Label>
              <Form.Control
                className="input-control"
                type="tel"
                name="corpPhone"
                value={corpPhone}
                placeholder="+56 9 9988 7766"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="website">
              <Form.Label>Website organizacional</Form.Label>
              <Form.Control
                className="input-control"
                type="url"
                name="website"
                value={website}
                placeholder="https://www.google.com"
                onChange={handleInputChange}
              />
            </Form.Group>
            <hr style={{width: 0}}/>
            <Button variant="primary" type="submit" className="submit-btn"> Guardar </Button>
            <hr style={{width: 0}}/>
          </Form>
        </Col>
      </Row>
    </Container>    
  </div>
  );
};

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
