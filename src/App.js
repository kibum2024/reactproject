import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Welcome to my React App</h1>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;