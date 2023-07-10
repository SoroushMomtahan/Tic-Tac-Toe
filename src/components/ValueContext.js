import { createContext, useRef, useState } from "react"

export const BoxValueContext = createContext([]);
export const BoxClickHandleContext = createContext(null);
export const UndoClickHandleContext = createContext(null);
export const ResetClickHandleContext = createContext(null);
export const WinnerContext = createContext('');

export default function ValueProvider({ children }) {

    const [boxContent, setBoxContent] = useState(['', '', '', '', '', '', '', '', '']);
    const [winner, setWinner] = useState('');


    const boxSeqRef = useRef([]);


    function handleBoxClick(id) {
        if (boxContent[id] === '' && winner === '') {

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

            calcuWinner(newBoxContent);

            boxSeqRef.current = [...boxSeqRef.current, id, pcId];
            setBoxContent(newBoxContent);
        }

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
        setWinner('');
        boxSeqRef.current.pop();

    }
    function calcuWinner(newBoxContent) {

        for (const arr of winnerStatus) {
            let winnerIsX = arr.every((value) => newBoxContent[value] === 'X');
            let winnerIsO = arr.every((value) => newBoxContent[value] === 'O');
            if (winnerIsX) {
                setWinner('X');
                break;
            } else if (winnerIsO) {
                setWinner('O');
                break;
            }
        }

    }
    function handleResetGame() {
        setBoxContent(['', '', '', '', '', '', '', '', '']);
        boxSeqRef.current = [];
        setWinner('');
    }

    return (
        <BoxValueContext.Provider value={boxContent}>
            <BoxClickHandleContext.Provider value={(id) => handleBoxClick(id)}>
                <UndoClickHandleContext.Provider value={handleUndoClick}>
                    <ResetClickHandleContext.Provider value={handleResetGame}>
                        <WinnerContext.Provider value={winner}>
                            {children}
                        </WinnerContext.Provider>
                    </ResetClickHandleContext.Provider>
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
// const winnerStatus = [1, 4, 7];