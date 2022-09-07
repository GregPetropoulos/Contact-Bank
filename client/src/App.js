// Author: Greg Petropoulos
// 8.22.22-8.25.22
// Contact Bank

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import AllContacts from './components/AllContacts';
import ContactForm from './components/ContactForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import jsonData from './data/contacts.json';


function App() {
  const [data, setData] = useState(jsonData);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home data={data} setData={setData} />} />
          <Route path='/all-contacts' element={<AllContacts data={data} />} />
          <Route
            path='/contact-form'
            element={<ContactForm setData={setData} data={data} />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
