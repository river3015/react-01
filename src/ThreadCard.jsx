import React from 'react';
import './ThreadCard.css';
import { Link } from 'react-router-dom';

const ThreadCard = ({ id, title }) => {

  return (
      <Link to={`/threads/:${id}`} className="thread-card">{title}</Link>
  );
};

export default ThreadCard;
