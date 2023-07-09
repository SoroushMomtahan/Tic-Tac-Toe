import { useContext } from "react";
import { ValueContext, ValueHandle } from "./ValueContext";

export default function Box({ boxIndex }) {
    const valueContext = useContext(ValueContext);
    const valueHandle = useContext(ValueHandle);

    return (
        <div>
            <p onClick={() => valueHandle(boxIndex)}>{valueContext[boxIndex]}</p>
        </div>
    );
}