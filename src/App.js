
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Package from './components/Package';
import Services from './components/Services';
import Iffco from './components/Iffco';
import Packages from './components/Package';


function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Navbar" element={<Navbar />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Package" element={<Package />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Iffco" element={<Iffco />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;