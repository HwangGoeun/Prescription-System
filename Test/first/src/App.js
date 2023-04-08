import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Hospital from './Hospital';
import Pharmacy from './Pharmacy';
import Home from './Home';
import Information from './Information';
import Informationpharmacy from './Informationpharmacy';
import Addinfo from './Addinfo';
import Addinfophar from './Addinfophar';
import WebView from './daeun/WebView';
import WebWrite from './daeun/WebWrite';
import Layout from './daeun/Layout';
import NoPage from './daeun/NoPage';
import Login from './login';
import SignUp from './Signup';
import Re_PW from './Re_PW';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={"/"} element ={<Login/>}></Route>
        <Route path={"/Signup"} element={<SignUp/>}></Route>
        <Route path={"/Re_PW"} element={<Re_PW/>}></Route>
        <Route path={"/Hospital"} element={<Hospital/>}></Route>
        <Route path={"/Home"} element={<Home/>}></Route>
        <Route path={"/Hospital"} element={<Hospital/>}></Route>
        <Route path={"/Pharmacy"} element={<Pharmacy/>}></Route>
        <Route path={"/Information"} element={<Information/>}></Route>
        <Route path={"/Informationpharmacy"} element={<Informationpharmacy/>}></Route>
        <Route path={"/Addinfo"} element={<Addinfo/>}></Route>
        <Route path={"/Addinfophar"} element={<Addinfophar/>}></Route>
        <Route path = {"/daeun/Layout"} element = {<Layout/>} ></Route>
        <Route path = {"/daeun/WebView"} element={<WebView />} ></Route>
        <Route path = {"/dauen/WebWrite"} element = {<WebWrite/>}></Route>
        <Route path = "*" element = {<NoPage/>} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
