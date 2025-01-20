import React, { useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const countRef = useRef(0);
  const warningRef = useRef(null);

  const handleIncrement = () => {
    warningRef.current.textContent = '';
    countRef.current.textContent = `Compteur : ${++countRef.current.value}`;
  };

  const handleDecrement = () => {
    if (countRef.current.value > 0) {
      countRef.current.textContent = `Compteur : ${--countRef.current.value}`;
    } else {
      warningRef.current.textContent = 'Aller en-dessous de zéro est défendu !!';
    }
  };

  useEffect(() => {
    countRef.current.value = 0;
    countRef.current.textContent = `Compteur : ${countRef.current.value}`;
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1 ref={countRef}>Compteur : 0</h1>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <p ref={warningRef} style={{ color: 'red' }}></p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
