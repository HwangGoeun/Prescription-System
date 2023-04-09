
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Main from './page/Main';
import WebWrite from './page/WebWrite';
import WebView from './page/WebView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="write" element={<WebWrite />} />
            <Route path="view" element={<WebView />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
