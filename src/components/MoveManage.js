import { useContext } from "react";
import { ResetClickHandleContext, UndoClickHandleContext } from "./ValueContext";

export default function MoveManage() {

    const undoClickHandle = useContext(UndoClickHandleContext);
    const resetClickHandle = useContext(ResetClickHandleContext);
    return (
        <div>
            <button onClick={undoClickHandle}>Undo</button>
            <button onClick={resetClickHandle}>Reset</button>
        </div>
    );
}