import React, { useReducer, useEffect } from 'react';
import './Calculator.css';
import Display from './Display';
import NumberButtons from './NumberButtons';
import OperatorButtons from './OperatorButtons';
import { calculatorReducer, initialState } from '../reducers/calculatorReducer';

const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  useEffect(() => {
    if (state.operationCount > 0 && state.operationCount % 10 === 0) {
      alert(`Déjà ${state.operationCount} opérations !`);
    }
  }, [state.operationCount]);

  const handleNumberClick = (number) => {
    if (state.operator) {
      dispatch({ type: 'SET_NUM2', payload: state.num2 + number });
    } else {
      dispatch({ type: 'SET_NUM1', payload: state.num1 + number });
    }
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const handleOperatorClick = (op) => {
    if (!state.num1 && !state.result) {
      dispatch({ type: 'SET_ERROR', payload: 'Impossible de faire une opération sans choisir un nombre avant !' });
      return;
    }

    if (state.num2) {
      handleEqualClick();
    }

    dispatch({ type: 'SET_OPERATOR', payload: op });
  };

  const handleEqualClick = () => {
    if (!state.num1 || !state.num2 || !state.operator) {
      dispatch({ type: 'SET_ERROR', payload: 'Erreur dans la manip.' });
      return;
    }

    switch (state.operator) {
      case '+':
        dispatch({ type: 'ADD' });
        break;
      case '-':
        dispatch({ type: 'SUBTRACT' });
        break;
      case 'x':
        dispatch({ type: 'MULTIPLY' });
        break;
      default:
        dispatch({ type: 'SET_ERROR', payload: 'Erreur dans la manip.' });
        return;
    }
    dispatch({ type: 'SET_OPERATOR', payload: '' });
  };

  const handleResetClick = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <NumberButtons onClick={handleNumberClick} />
      <OperatorButtons
        onAdd={() => handleOperatorClick('+')}
        onSubtract={() => handleOperatorClick('-')}
        onMultiply={() => handleOperatorClick('x')}
        onEqual={handleEqualClick}
        onReset={handleResetClick}
      />
      {state.error && <p className="error">{state.error}</p>}
    </div>
  );
};

export default Calculator;
