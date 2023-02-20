import React from 'react';
import "./App.css";
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Work/>
        <Testimonials/>
        <Contact/>
      </main>
        <Footer/>
        <Scrollup/>
    </>
  )
}

export default App
