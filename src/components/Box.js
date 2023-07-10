import { useContext } from "react";
import { BoxValueContext, BoxClickHandleContext } from "./ValueContext";


export default function Box({ id }) {
    const boxValue = useContext(BoxValueContext);
    const boxClickHandle = useContext(BoxClickHandleContext);

    return (
        <div className="flex justify-center items-center w-16 h-16 m-1 bg-gray-300" onClick={() => boxClickHandle(id)}>
            {boxValue[id] === 'X' ?
                <p className="text-4xl text-indigo-600">{boxValue[id]}</p> :
                <p className="text-4xl text-pink-600">{boxValue[id]}</p>}
        </div>
    );
}