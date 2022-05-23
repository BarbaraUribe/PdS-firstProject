import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Create from '../components/Create/Create';
import List from '../components/List/List';
import Edit from '../components/Edit/Edit';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [users, setUsers] = useLocalStorage('users', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element = {<List {...List.defaultProps} users={users} setUsers={setUsers} />} path="/" exact />
            <Route element = {<Create {...Create.defaultProps} users={users} setUsers={setUsers} />} path="/add" />
            <Route element = {<Edit {...Edit.defaultProps} users={users} setUsers={setUsers} />} path= "/edit/:id" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;