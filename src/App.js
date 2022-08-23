import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
