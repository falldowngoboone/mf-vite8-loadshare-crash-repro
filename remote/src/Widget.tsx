import React from 'react';

export default function Widget() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ border: '1px solid blue', padding: 16 }}>
      <h2>Remote Widget</h2>
      <button onClick={() => setCount((c) => c + 1)}>Remote Count: {count}</button>
    </div>
  );
}
