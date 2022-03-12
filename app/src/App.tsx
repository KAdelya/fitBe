import React from 'react';
import { Advertising } from './pages/Advertising/Advertising';
import styles from './App.module.sass'
import { MainPage } from './pages/MainPage/MainPage';
import { Registration } from './pages/Registration/Registration'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className={styles.main_content}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/registration' element={<Registration/>}/>
        </Routes>
        </BrowserRouter>
      {/* <Advertising /> */}
    </div>
  );
}

export default App;
