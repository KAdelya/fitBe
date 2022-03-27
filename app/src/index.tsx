import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import mainStore from './stores/mainStore';
import {ModalConstructor} from "./components/modal/ModalConstructor";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCPE_phxJ_Xbg6P-FEWVzH6IirTVpd784g",
    authDomain: "fitbe-f03ed.firebaseapp.com",
    projectId: "fitbe-f03ed",
    storageBucket: "fitbe-f03ed.appspot.com",
    messagingSenderId: "1078037220285",
    appId: "1:1078037220285:web:f394833d5670da486860d4",
    measurementId: "G-ECNRVXXWZX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
