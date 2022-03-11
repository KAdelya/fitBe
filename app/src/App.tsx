import React from 'react';
import { Advertising } from './pages/Advertising/Advertising';
import styles from './App.module.sass'
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <div className={styles.main_content}>
      <MainPage />
      {/* <Advertising /> */}
    </div>
  );
}

export default App;
