import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Footer from './components/Footer'
import AllContacts from './components/AllContacts';

import jsonData from './data/contacts.json' 

function App() {

  const [data, setData] = useState(jsonData);

  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/all-contacts' element={<AllContacts data={data}/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
