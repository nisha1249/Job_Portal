import './App.css';
import Homepage from './page/Homepage';
import Jobdeatil from './page/Jobdeatil';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/jobs/:id" element={<Jobdeatil />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
