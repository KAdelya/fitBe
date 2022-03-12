import React from 'react';
import { Advertising } from './pages/Advertising/Advertising';
import styles from './App.module.sass'
import { MainPage } from './pages/MainPage/MainPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { SignPage } from './pages/SignPage/SignPage'

function App() {
  return (
    <div className={styles.main_content}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
            <Route path='/sign' element={<SignPage/>}/>
        </Routes>
        </BrowserRouter>
      {/* <Advertising /> */}
    </div>
  );
}

export default App;
