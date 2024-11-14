import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>

            <Route path='aboutme' element={<AboutMe />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='project' element={<Projects />}/>
            <Route path='skills' element={<Skills />}/>
            <Route path='blog' element={<Blog />}/>
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
