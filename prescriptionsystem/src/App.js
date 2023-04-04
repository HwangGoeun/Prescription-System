import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './navigation/Sidebar';
import Main from './page/Main';
import People from './page/People';
import PrescList from './page/PrescList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<PrescList />} />
          <Route path='/people' element={<People></People>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
