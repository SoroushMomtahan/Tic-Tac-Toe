import './App.css';
import { useState } from "react";

export default function App() {
    const [index, setIndex] = useState(0);

    console.log('first1 ' + index);
    function nameChangeHandle() {
        setIndex(index + 1);
        setIndex(index - 1);
    }
    console.log('end ' + index);
    return (
        <div>
            <p onClick={nameChangeHandle}>{index}</p>
            <p>{index}</p>
        </div>
    );
}
