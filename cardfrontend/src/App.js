import './App.css';
import Navbar from './components/Navbar';
import Card from './Pages/Card';
import About from './Pages/View';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Card" element={<Card />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
