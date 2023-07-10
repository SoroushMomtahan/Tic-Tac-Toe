import { useContext } from "react";
import { WinnerContext } from "./ValueContext";

export default function Boxes({ children }) {
    const winnerContext = useContext(WinnerContext);
    return (
        <div>
            {children}
            {winnerContext ? winnerContext + " is winner" : ''}
        </div>
    );
}