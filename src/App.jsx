import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/hello');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text(); // Use response.text() for plain text response

      // Show data in a popup
      window.alert(data);

      // Alternatively, use a modal library like react-modal
      // Example: https://www.npmjs.com/package/react-modal

      setMessage(data); // Update the state with the fetched data
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={fetchData}>
          Fetch Data
        </button>
        {/* Remove rendering message directly */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
