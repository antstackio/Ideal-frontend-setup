import { useState } from 'react';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  console.log('App ~ count', count);

  return (
    <>
      <div>
        <img src={reactLogo} alt="" />
      </div>
      <div>
        <img src={reactLogo} alt="" />
      </div>
    </>
  );
}

export default App;
