import './App.css';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    // function handleincrement() {
    //     setCount(count + 2);
    //     console.log(count);
    // }
    return (
        <>
            <h2>count : {count}</h2>
            <button  onClick={() => setCount(count + 2)}>Increment</button>
        </>
    );
}
export default App
