import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Root.css';

const Root = () => {

  return (
    <div className="container">
      <header className="header">
        <h1><Link to="/">☆みんなの掲示板☆</Link></h1>
      </header>
      <Outlet />
    </div>
  );
};

export default Root;