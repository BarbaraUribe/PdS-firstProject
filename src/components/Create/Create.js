import React from 'react';
import styles from './Create.module.css';
import UserForm from '../UserForm/UserForm';
import { useNavigate } from 'react-router-dom';

const Create = ({ users, setUsers}) => {
  const history = useNavigate();
  const handleOnSubmit = (user) => {
    setUsers([user, ...users]);
    history('/');
  };

  return (
  <div className={styles.Create}>
    <React.Fragment>
      <UserForm handleOnSubmit = { handleOnSubmit } />
    </React.Fragment>
  </div>
  );
};
Create.propTypes = {};

Create.defaultProps = {};

export default Create;

