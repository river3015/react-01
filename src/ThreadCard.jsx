import React from 'react';
import './ThreadCard.css';

const ThreadCard = ({ title }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default ThreadCard;
