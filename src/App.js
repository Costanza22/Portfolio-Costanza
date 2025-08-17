import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Certificates />
        <Projects />
        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
