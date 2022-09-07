// Author: Greg Petropoulos
// 8.22.22-8.25.22
// Contact Bank

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import AllContacts from './components/AllContacts';
import ContactForm from './components/ContactForm';
import ContactState from './context/contact/ContactState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ContactState>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all-contacts' element={<AllContacts />} />
            <Route path='/contact-form' element={<ContactForm />} />
          </Routes>
          <Pagination />
        </ContactState>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
