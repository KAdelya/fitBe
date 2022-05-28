import {render, screen} from "@testing-library/react";
import {MainPage} from "./Main/MainPage";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import styles from "../App.module.sass";
import store, {persistor} from "../redux";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';

describe("when rendered with a `name` prop", () => {
    it("should paste it into the greetings text", () => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage  />} />
                </Routes>
            </Router>
                    </PersistGate>
                </Provider>
            </React.StrictMode>
        );
        expect(
            screen.getByText(/We encourage you to go on a fitness journey with our app!/)
        ).toBeInTheDocument();
    });
});
