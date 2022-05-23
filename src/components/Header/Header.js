import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Header = () => (
  <div className={styles.Header}>
    <hr style={{width: 0}}/>
    <div className='links'>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/" exact="true">
            Lista de usuarios
          </NavLink>
        </Col>
        <Col xs lg="2">
          <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/add" >
            Crear usuario nuevo
          </NavLink>
        </Col>
      </Row>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
