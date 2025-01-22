import { useReducer } from 'react';

export const initialState = {
  num1: '',
  num2: '',
  result: null,
  error: '',
  operationCount: 0,
  operator: '',
  displayValue: '0',
};

export const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUM1':
      return {
        ...state,
        num1: action.payload,
        displayValue: action.payload + (state.operator ? ` ${state.operator} ${state.num2}` : ''),
      };
    case 'SET_NUM2':
      return {
        ...state,
        num2: action.payload,
        displayValue: state.num1 + ` ${state.operator} ${action.payload}`,
      };
    case 'SET_OPERATOR':
      return {
        ...state,
        operator: action.payload,
        displayValue: state.num1 + ` ${action.payload}`,
      };
    case 'CLEAR_ERROR':
      return { ...state, error: '' };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'ADD':
      const additionResult = parseFloat(state.num1) + parseFloat(state.num2);
      return {
        ...state,
        result: additionResult,
        num1: additionResult.toString(),
        num2: '',
        operationCount: state.operationCount + 1,
        error: '',
        displayValue: additionResult.toString(),
      };
    case 'SUBTRACT':
      const subtractionResult = parseFloat(state.num1) - parseFloat(state.num2);
      return {
        ...state,
        result: subtractionResult,
        num1: subtractionResult.toString(),
        num2: '',
        operationCount: state.operationCount + 1,
        error: '',
        displayValue: subtractionResult.toString(),
      };
    case 'MULTIPLY':
      const multiplicationResult = parseFloat(state.num1) * parseFloat(state.num2);
      return {
        ...state,
        result: multiplicationResult,
        num1: multiplicationResult.toString(),
        num2: '',
        operationCount: state.operationCount + 1,
        error: '',
        displayValue: multiplicationResult.toString(),
      };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
};

export const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  return { state, dispatch };
};
