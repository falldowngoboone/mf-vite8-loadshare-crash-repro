import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Host App</h1>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
