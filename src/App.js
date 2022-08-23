import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Footer from './components/Footer'
import ContactDetails from'./components/ContactDetails'

import jsonData from './data/contacts.json' 

function App() {

  const [data, setData] = useState(jsonData);

  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/contact-details' element={<ContactDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
