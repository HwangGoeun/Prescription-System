import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import SignUp from './Signup';
import Re_PW from './Re_PW';

import Hospital from './Hospital';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element ={<Login/>}></Route>
          <Route path={"/Signup"} element={<SignUp/>}></Route>
          <Route path={"/Re_PW"} element={<Re_PW/>}></Route>
          <Route path={"/Hospital"} element={<Hospital/>}></Route>

        </Routes>
      </BrowserRouter>
    
  );
}

export default App  ;
