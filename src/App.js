import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import icon from './icons/logo.png';
import Greetings from './components/Greetings';

const App = () => (
  <BrowserRouter>
    <MetaTags>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </MetaTags>
    <div className="Initial" data-testid="app-1">
      <div className="panel-bg">
        <h1 className="navTitle">
          <img src={icon} alt="MET logo" className="iconClass" />
          Greetings App
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
