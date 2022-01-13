import React from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(60);
  React.useEffect(() => {
    let counter = count
    if (counter > 0)
      counter = count - 1

    const decrement = setInterval(() => {
      setCount(counter)
    }, 1000)
    return () => clearInterval(decrement)
  }, [count]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count Down Timer
        </p>
        <p
          className="App-link"
          rel="noopener noreferrer"
        >
          {count + " seconds left"}
        </p>

      </header>
    </div>
  );
}

export default App;
