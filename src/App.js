import Boxes from './components/Boxes';
import Row from './components/Row';
import Box from './components/Box';
import MoveManage from './components/MoveManage';
import ValueProvider from './components/ValueContext';

export default function App() {

    return (
        <div>
            <ValueProvider>
                <Boxes>
                    <Row>
                        <Box boxIndex={0} />
                        <Box boxIndex={1} />
                        <Box boxIndex={2} />
                    </Row>
                    <Row>
                        <Box boxIndex={3} />
                        <Box boxIndex={4} />
                        <Box boxIndex={5} />
                    </Row>
                    <Row>
                        <Box boxIndex={6} />
                        <Box boxIndex={7} />
                        <Box boxIndex={8} />
                    </Row>
                    <MoveManage />
                </Boxes>
            </ValueProvider>
        </div>
    );
}

