import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.sass'
 import  MainPage  from './pages/MainPage/MainPage';
import PersonalArea from './pages/PersonalArea/PersonalArea';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/lk' element={<PersonalArea />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
