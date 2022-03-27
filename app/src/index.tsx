import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import mainStore from './stores/mainStore';
import {ModalConstructor} from "./components/modal/ModalConstructor";

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
