import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './navigation/Sidebar';
import SidebarManage from './navigation/SidebarManage';
import Hospital from './page/Hospital';
import Main from './page/Main';
import People from './page/People';
import Pharmacy from './page/Pharmacy';
import PrescList from './page/PrescList';


function App() {
  return (
    <div>
      <BrowserRouter>
        <SidebarManage></SidebarManage>
        <Routes>
          <Route path="/" element={<Pharmacy />} />
          <Route path='/pharmacy' element={<Hospital />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
