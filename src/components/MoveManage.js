import { useContext } from "react";
import { MovementHandle } from "./ValueContext";

export default function MoveManage() {

    const handleMovement = useContext(MovementHandle);
    return (
        <div>
            <button onClick={handleMovement}>Undo</button>
        </div>
    );
}