import React from 'react';
import './Pagination.css';

const Pagination = ({ handleFirst, handlePrev, handleNext, offset }) => {
  return (
    <div className="pagination">
      <button onClick={handleFirst} disabled={offset === 1}>&lt;&lt;</button>
      <button onClick={handlePrev} disabled={offset === 1}>&lt;</button>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Pagination;