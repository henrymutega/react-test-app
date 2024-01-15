import { useState } from "react";

function FunctionCounter(){

    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };

    return <div>
        <h2>Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        </div>
}
export default FunctionCounter;