import React from 'react';
import styles from './List.module.css';
import User from '../User/User';
import _ from 'lodash';

const List = ({ users, setUsers }) => {

  const handleRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <React.Fragment>
      <div className={styles.List}>
        {!_.isEmpty(users) ? (
          users.map((user) => (
            <User key={user.id} {...user} handleRemoveUser={handleRemoveUser} />
          ))
        ) : (
          <p className="message">No Users.</p>
        )}
      </div>
    </React.Fragment>
  );
};
List.propTypes = {};

List.defaultProps = {};

export default List;
