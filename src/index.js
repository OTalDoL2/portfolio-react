import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/Layout';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>

            <Route path='blogs' element={<Blog />}/>
            <Route path='blogs' element={<Blog />}/>
            
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
