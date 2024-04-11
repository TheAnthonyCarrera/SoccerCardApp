import './App.css';
import Navbar from './components/Navbar';
import Card from './Pages/Card';
import About from './Pages/View';
import Search from './Pages/Search';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Card" element={<Card />} />
          <Route path="/about" element={<About />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
