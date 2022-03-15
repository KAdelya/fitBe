import React from 'react';
import { Advertising } from './pages/Advertising/Advertising';
import styles from './App.module.sass'
import { MainPage } from './pages/MainPage/MainPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { SignPage } from './pages/SignPage/SignPage'
import PersonalArea from './pages/PersonalArea/PersonalArea';
import {CharitableFoundationPage} from "./pages/CharitableFoundationPage/CharitableFoundationPage";
import {SubscriptionPaymentPage} from "./pages/SubscriptionPaymentPage/SubscriptionPaymentPage";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/sign' element={<SignPage />} />
          <Route path='/user' element={<PersonalArea />} />
          <Route path='/charitable_foundation' element={<CharitableFoundationPage/>}/>
          <Route path='/subscription_payment' element={<SubscriptionPaymentPage/>}/>
        </Routes>
      </Router>
      {/* <Advertising /> */}
    </div>
  );
}

export default App;
