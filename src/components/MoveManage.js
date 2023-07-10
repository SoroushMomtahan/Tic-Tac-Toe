import { useContext } from "react";
import { UndoClickHandleContext } from "./ValueContext";

export default function MoveManage() {

    const undoClickHandle = useContext(UndoClickHandleContext);
    return (
        <div>
            <button onClick={undoClickHandle}>Undo</button>
        </div>
    );
}