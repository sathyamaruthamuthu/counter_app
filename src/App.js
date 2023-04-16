import React from 'react';
//import FunctionCounter from './components/FunctionCounter';
import './App.css';
//import ClassCounter from './components/ClassCounter';
//import CounterFunctionBased from './components/use_effect/CounterFunctionBased';
//import CounterClassBased from './components/use_effect/CounterClassBased'
import FetchEmployees from './components/use_effect/FetchEmployees';

function App() {
  return (
    <div className='App'>
      {/* <ClassCounter /> */}
        {/* <FunctionCounter /> */}
        {/*<CounterFunctionBased />*/}
        {/* <CounterClassBased /> */}
        <FetchEmployees />
    </div>
  )
  
}

export default App;
