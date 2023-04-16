import React,{useState} from 'react';



function FunctionCounter () {
    const [count , setCount] = useState(0);

  return (
    <div>
      <header>
          <h1>Counter App using State (useState Hook)</h1>
      </header>
      <h2>Current Value of counter is : {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => count > 10 ? "" : setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => count === 0 ? "" : setCount(count - 1)}>Decrease Counter</button>
    </div>
  );
}

export default FunctionCounter



