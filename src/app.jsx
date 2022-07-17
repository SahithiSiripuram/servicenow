import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QRGenerate from './qrGenerate'
import QRScanner from './qrScan'

function App() {
	return (
		<>
			<div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/scan/:data' element={<QRScanner/>} />
                        <Route path='/' element={<QRGenerate/>} />
                    </Routes>
                </BrowserRouter>
			</div>
		</>
	);
}

export default App;