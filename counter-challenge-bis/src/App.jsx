import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Counter({ increment, description, isCyclic = false, isBinary = false, hasReset = true }) {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (!isCyclic && !isBinary && count >= 20) {
      clearInterval(timerId);
      setIsRunning(false);
    }
  }, [count, timerId, isCyclic, isBinary]);

  const handleStart = () => {
    setIsRunning(true);
    setTimerId(setInterval(() => {
      if (isCyclic) {
        setCount(prevCount => (prevCount + increment) % 21);
      } else if (isBinary) {
        setCount(prevCount => (prevCount === 0 ? 1 : 0));
      } else {
        setCount(prevCount => prevCount + increment);
      }
    }, 1000));
  };

  const handleStop = () => {
    clearInterval(timerId);
    setIsRunning(false);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p>{description}</p>
      <p style={{ color: count >= 20 ? 'red' : 'black' }}>{count}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={handleStart} disabled={isRunning || (!isCyclic && !isBinary && count >= 20)}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      </div>
      {hasReset && <button onClick={handleReset} style={{ marginTop: '10px' }}>Reset</button>}
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>
        <h1>Vite + React</h1>
        <section style={{ display: 'flex', justifyContent: 'center', gap: '50px', margin: '20px 0' }}>
          <Counter increment={1} description="Compteur +1" />
          <Counter increment={2} description="Compteur +2" />
        </section>
        <section style={{ display: 'flex', justifyContent: 'center', gap: '50px', margin: '20px 0' }}>
          <Counter increment={1} description="Compteur cyclique" isCyclic={true} hasReset={false} />
          <Counter increment={1} description="Compteur binaire" isBinary={true} hasReset={false} />
        </section>
      </main>
      
    </div>
  );
}

export default App;
