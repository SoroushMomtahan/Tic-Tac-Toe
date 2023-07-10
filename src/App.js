import Boxes from './components/Boxes';
import Row from './components/Row';
import Box from './components/Box';
import MoveManage from './components/MoveManage';
import ValueProvider from './components/ValueContext';
import './index.css'

export default function App() {

    return (
        <div className='flex justify-center'>
            <ValueProvider>
                <Boxes>
                    <Row>
                        <Box id={0} />
                        <Box id={1} />
                        <Box id={2} />
                    </Row>
                    <Row>
                        <Box id={3} />
                        <Box id={4} />
                        <Box id={5} />
                    </Row>
                    <Row>
                        <Box id={6} />
                        <Box id={7} />
                        <Box id={8} />
                    </Row>
                </Boxes>
                <MoveManage />
            </ValueProvider>
        </div>
    );
}

