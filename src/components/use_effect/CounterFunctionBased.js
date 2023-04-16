import React, {useEffect, useState} from 'react';


const CounterFunctionBased = () => {
    const[count, setCount] = useState(0)
    const[msg, setMsg] = useState('initial message')

    useEffect( () => { 
        //To avoid the duplicate coding of componentDidMount() and componentDidUpdate() -
        // we have useEffect in functional components
        console.log('count is incremented', count)
        console.log('message is updated as ', msg)
        document.title = `You clicked the increment button ${count} times`
    }, [count, msg])
    
    return (
        <div>
            <button onClick={ () => setCount(count+1)}> Increment</button>
            <p>Count is incremented to : {count}</p>
            <button onClick={ () => setMsg('message is updated')}>Update message</button>
        </div>
    )
}

export default CounterFunctionBased