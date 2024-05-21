import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import {Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Internship from './Components/Internship';
import Ncourses from './Components/Ncourses';
import Joinnow from './Components/Joinnow';
import CR from './Components/CR'
import CRI from './Components/CRI'
import TC from './Components/TC';
// import Faq from './Components/Faq'
function App() {
  // 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
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/ncourses' element={<Ncourses/>}/>
        <Route path='/internship'element={<Internship/>}/>
        <Route path='/join' element={<Joinnow/>} />
        <Route path='/cr'element={<CR/>}/>
        <Route path='/TC'element={<TC/>}/>
        {/* <Route path='/faq'element={<Faq/>}/> */}
        <Route path='/cri'element={<CRI/>}/>
        


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
