import React, { useReducer, useEffect } from 'react';
import './Calculator.css';
 
const initialState = {
  num1: '',
  num2: '',
  result: null,
  error: '',
  operationCount: 0
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUM1':
      return { ...state, num1: action.payload };
    case 'SET_NUM2':
      return { ...state, num2: action.payload };
    case 'ADD':
      if (isNaN(parseFloat(state.num1)) || isNaN(parseFloat(state.num2))) {
        return { ...state, error: 'Les nombres sont invalides !', result: null };
      }
      return {
        ...state,
        result: parseFloat(state.num1) + parseFloat(state.num2),
        operationCount: state.operationCount + 1,
        error: ''
      };
    case 'MULTIPLY':
      if (isNaN(parseFloat(state.num1)) || isNaN(parseFloat(state.num2))) {
        return { ...state, error: 'Les nombres sont invalides !', result: null };
      }
      return {
        ...state,
        result: parseFloat(state.num1) * parseFloat(state.num2),
        operationCount: state.operationCount + 1,
        error: ''
      };
    case 'RESET':
      return { ...state, num1: '', num2: '', result: null, error: '' };
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  useEffect(() => {
    if (state.operationCount > 0 && state.operationCount % 10 === 0) {
      alert(`Déjà ${state.operationCount} opérations !`);
    }
  }, [state.operationCount]);

  return (
    <div className="calculator">
      <div className="inputs">
        <input
          type="text"
          value={state.num1}
          onChange={(e) => dispatch({ type: 'SET_NUM1', payload: e.target.value })}
          placeholder="Num1"
        />
        <input
          type="text"
          value={state.num2}
          onChange={(e) => dispatch({ type: 'SET_NUM2', payload: e.target.value })}
          placeholder="Num2"
        />
      </div>
      <div className="buttons">
        <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
        <button onClick={() => dispatch({ type: 'MULTIPLY' })}>*</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
      {state.result !== null && <p>Résultat : {state.result}</p>}
      {state.error && <p className="error">{state.error}</p>}
    </div>
  );
};

export default Calculator;
