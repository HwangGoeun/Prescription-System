
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WebView from './WebView';
import WebWrite from './WebWrite';
import Layout from './Layout';
import NoPage from './NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>} >
        <Route index element = {<WebView />} />
        <Route path = "write" element = {<WebWrite/>} />
        <Route path = "*" element = {<NoPage/>} />
        </Route>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
