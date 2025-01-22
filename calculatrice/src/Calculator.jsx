import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [operationCount, setOperationCount] = useState(0);

  useEffect(() => {
    if (operationCount > 0 && operationCount % 10 === 0) {
      alert(`Déjà ${operationCount} opérations !`);
    }
  }, [operationCount]);

  const handleAddition = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setError('Les nombres sont invalides !');
      return;
    }

    setResult(number1 + number2);
    setOperationCount(prevCount => prevCount + 1);
    setError('');
  };

  const handleMultiplication = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setError('Les nombres sont invalides !');
      return;
    }

    setResult(number1 * number2);
    setOperationCount(prevCount => prevCount + 1);
    setError('');
  };

  const handleReset = () => {
    setNum1('');
    setNum2('');
    setResult(null);
    setError('');
  };

  return (
    <div className="calculator">
      <div className="inputs">
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Num1"
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Num2"
        />
      </div>
      <div className="buttons">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {result !== null && <p>Résultat : {result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Calculator;
