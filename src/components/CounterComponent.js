import {useState} from "react";

let CounterComponent = () => {

    // let counter = 0;

    let [counter, setCounter]= useState(0)
    
    let btnHandler = () => {
        setCounter(counter+1)
        //setCounter(prev => prev+1)
    }
    
    return (
        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={btnHandler}>Click</button>
        </div>
    )
}

export default CounterComponent