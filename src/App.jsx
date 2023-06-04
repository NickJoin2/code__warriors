import React from 'react';  
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';  
import Frontend from './components/Frontend';  
import Project from './components/Project';  
import Footer from './components/Footer';
import Other from './components/Other';
import Team from './components/Team';
import Header from './components/Header';
import Vlad from './components/Vlad';

  
function App() {   
  return (  
    <BrowserRouter>  
      <Frontend /> 
      <Routes> 
      <Route path='/header' element={<Header />} /> 
        <Route path='/project' element={<Project />} /> 
        <Route path='/team' element={<Team />} />
        <Route path='/other' element={<Other />} />
        <Route path='/vlad' element={<Vlad />} />
      </Routes> 
      <Footer />
    </BrowserRouter>   
  )  
}  
  
export default App;