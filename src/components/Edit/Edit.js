import React from 'react';
import styles from './Edit.module.css';
import UserForm from '../UserForm/UserForm'
import { useParams, useNavigate } from 'react-router-dom';

const Edit = ({ users, setUsers }) => {
  const history = useNavigate();
  const { id } = useParams();
  const userToEdit = users.find((user) => user.id === id);

  const handleOnSubmit = (user) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers([user, ...filteredUsers]);
    history('/');
  };
  return(
    <div className = {styles.Edit}>
      <UserForm user = {userToEdit} handleOnSubmit = {handleOnSubmit} />
    </div>
  );
};

Edit.propTypes = {};

Edit.defaultProps = {};

export default Edit;
