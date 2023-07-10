import { createContext, useRef, useState } from "react"

export const BoxValueContext = createContext([]);
export const BoxClickHandleContext = createContext(null);
export const UndoClickHandleContext = createContext(null);

export default function ValueProvider({ children }) {

    const [boxContent, setBoxContent] = useState(['', '', '', '', '', '', '', '', '']);

    const boxSeqRef = useRef([]);

    function handleBoxClick(id) {
        if (boxContent[id] === '') {

            let newBoxContent = boxContent.map((value, index) => {
                if (index === id) {
                    return 'X';
                } else {
                    return value;
                }
            });

            let counter = 0;
            let pcId = -1;
            br: while (counter < 9) {
                let pcRandomId = Math.floor(Math.random() * 9);
                for (pcRandomId in newBoxContent) {
                    if (newBoxContent[pcRandomId] === '') {
                        newBoxContent[pcRandomId] = 'O'
                        pcId = Number(pcRandomId);
                        break br;
                    } else {
                        counter++;
                    }
                }
            }
            setBoxContent(newBoxContent);

            boxSeqRef.current = [...boxSeqRef.current, id, pcId];

        }
        calcuWinner();
    }
    function handleUndoClick() {

        let newBoxContent = boxContent.map((value, index) => {
            if (boxSeqRef.current[boxSeqRef.current.length - 1] === index) {
                return '';
            } else {
                return value;
            }
        });

        setBoxContent(newBoxContent);

        boxSeqRef.current.pop();

    }
    function calcuWinner() {

        if (boxSeqRef.current[0] === 'X' && boxSeqRef.current[1] === 'X' && boxSeqRef.current[2] === 'X') {
            console.log('x Win');
            // setBoxContent([]);
        } else {

        }
    }

    return (
        <BoxValueContext.Provider value={boxContent}>
            <BoxClickHandleContext.Provider value={(id) => handleBoxClick(id)}>
                <UndoClickHandleContext.Provider value={handleUndoClick}>
                    {children}
                </UndoClickHandleContext.Provider>
            </BoxClickHandleContext.Provider>
        </BoxValueContext.Provider>
    );
}

const winnerStatus = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];