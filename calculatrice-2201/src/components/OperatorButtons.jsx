import React from 'react';
import './OperatorButtons.css';

const OperatorButtons = ({ onAdd, onSubtract, onMultiply, onEqual, onReset }) => {
  return (
    <div className="operator-buttons">
      <button onClick={onAdd}>+</button>
      <button onClick={onSubtract}>-</button>
      <button onClick={onMultiply}>x</button>
      <button onClick={onEqual}>=</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default OperatorButtons;
