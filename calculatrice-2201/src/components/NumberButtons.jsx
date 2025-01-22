import React from 'react';
import './NumberButtons.css';

const NumberButtons = ({ onClick }) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className="number-buttons">
      {numbers.map(number => (
        <button key={number} onClick={() => onClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default NumberButtons;
