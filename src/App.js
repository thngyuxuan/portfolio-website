import React from 'react';
import { hot } from 'react-hot-loader';
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/home/Home'; 
import About from './components/about/About';
import Contact from './Pages/contact/Contact';
import Footer from './components/footer/Footer'
import Testimonial from '../src/Pages/testimonial/Testimonial';
import Projects from './Pages/projects/Projects';
import Skills from './Pages/skills/Skills';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/testimonial' exact component={Testimonial} />
          <Route path='/skills' exact component={Skills}/>
        </Switch>
        <Footer />
      </Router> 
    </>
  );
}

export default hot(module)(App);
