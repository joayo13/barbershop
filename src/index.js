import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Nav from './components/Nav';
import NotFound from './pages/Notfound';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Reservations from './pages/Reservations';
import Footer from './components/Footer';
import TeamMember from './pages/TeamMember';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' Component={App}></Route>
    <Route path='/services' Component={Services}></Route>
    <Route path='/contact' Component={Contact}></Route>
    <Route path='/about' Component={About}></Route>
    <Route path='/team' Component={Team}></Route>
    <Route path='/team/:id' Component={TeamMember}></Route>
    <Route path='/reservations' Component={Reservations}></Route>
    <Route path='*' Component={NotFound}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
