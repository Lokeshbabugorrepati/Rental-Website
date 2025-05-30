import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'   
import Footer from './components/Footer/Footer'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Villas from './components/Villa/Villas'
import SingleVilla from './components/Villa/SingleVilla'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus"element={<AboutUs />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/villas" element={<Villas />} />
           <Route path="/villa/:id" element={<SingleVilla />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App