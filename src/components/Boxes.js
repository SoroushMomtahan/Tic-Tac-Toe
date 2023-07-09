import { useContext } from "react";
import { ValueContext } from "./ValueContext";

export default function Boxes({ children }) {
    const valueContext = useContext(ValueContext);
    return (
        <div>
            {valueContext[0] ? children : 'X WIn'}
        </div>
    );
}