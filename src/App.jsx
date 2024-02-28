import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Blue" element={<Blue/>}/>
          <Route path="/Red" element={<Red/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App;
