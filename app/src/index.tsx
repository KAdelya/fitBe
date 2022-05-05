import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import mainStore from './stores/mainStore';
import { ModalConstructor } from "./components/Modal/ModalConstructor";

import firebase, { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';



const app = initializeApp({
  // apiKey: "AIzaSyATktBg4k_tRIMEAEuVlskz7lNu8gEvD6c",
  // authDomain: "fitbev2.firebaseapp.com",
  // databaseURL: "https://fitbev2-default-rtdb.firebaseio.com",
  // projectId: "fitbev2",
  // storageBucket: "fitbev2.appspot.com",
  // messagingSenderId: "1020844677779",
  // appId: "1:1020844677779:web:054ad5b5bda974ce948b66",
  // measurementId: "G-DV3TQE5BE0"
  apiKey: "AIzaSyA0fvCh-aT77nvqfLSgHlCpGM_wcbNzTOI",
  authDomain: "befit-ef9f9.firebaseapp.com",
  databaseURL: "https://befit-ef9f9-default-rtdb.firebaseio.com",
  projectId: "befit-ef9f9",
  storageBucket: "befit-ef9f9.appspot.com",
  messagingSenderId: "1001074447643",
  appId: "1:1001074447643:web:09a66c1769f37aa2676fbe"
});



ReactDOM.render(
  <React.StrictMode>
    <Provider {...mainStore}>
      <App />
      <ModalConstructor />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export const db = getDatabase(app);
