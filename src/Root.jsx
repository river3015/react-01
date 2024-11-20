import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Root.css';

const Root = () => {

  return (
    <div className="container">
      <header className="header">
        <h1>☆みんなの掲示板一覧☆</h1>
      </header>
      <Outlet />
    </div>
  );
};

export default Root;