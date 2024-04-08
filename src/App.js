import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import {Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Joinnow from './Components/Joinnow';
function App() {
  // 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
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/join' element={<Joinnow/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
