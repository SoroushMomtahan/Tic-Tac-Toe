import { createContext, useRef, useState } from "react"

export const ValueContext = createContext([]);
export const ValueHandle = createContext(null);
export const MovementHandle = createContext(null);

export default function ValueProvider({ children }) {

    const [flag, setFlag] = useState(true);
    const [boxContent, setBoxContent] = useState(['Z', 'Z', 'Z', 'Z', 'Z', 'Z', 'Z', 'Z', 'Z']);
    const boxSeqRef = useRef([]);

    function handleValue(boxIndex) {
        if (boxContent[boxIndex] === 'Z') {
            boxSeqRef.current = [...boxSeqRef.current, boxIndex];
            if (flag) {
                let newBoxContent = boxContent.map((value, index) => {
                    if (index === boxIndex) {
                        return 'X'
                    } else {
                        return value;
                    }
                });
                setBoxContent(newBoxContent);
            } else {
                let newBoxContent = boxContent.map((value, index) => {
                    if (index === boxIndex) {
                        return 'O'
                    } else {
                        return value;
                    }
                });
                setBoxContent(newBoxContent);
            }
            setFlag(!flag);
        }
        handleWhoWin();
    }
    function handleMovement() {

        let newBoxContent = boxContent.map((value, index) => {
            if (boxSeqRef.current[boxSeqRef.current.length - 1] === index) {
                return 'Z';
            } else {
                return value;
            }
        });
        boxSeqRef.current.pop();
        setBoxContent(newBoxContent);
    }
    function handleWhoWin() {
        if (boxSeqRef.current[0] === 'X' && boxSeqRef.current[1] === 'X' && boxSeqRef.current[2] === 'X') {
            console.log('x Win');
            // setBoxContent([]);
        } else {

        }
    }

    return (
        <ValueContext.Provider value={boxContent}>
            <ValueHandle.Provider value={(boxIndex) => handleValue(boxIndex)}>
                <MovementHandle.Provider value={handleMovement}>
                    {children}
                </MovementHandle.Provider>
            </ValueHandle.Provider>
        </ValueContext.Provider>
    );
}