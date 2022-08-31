import React from 'react';
import './App.css'
import Header from './Header'
import './App.css';
import Sidebar from './Sidebar'
import Mail from './Mail'
import EmailList from './EmailList'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
