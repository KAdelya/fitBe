import {render, screen} from "@testing-library/react";
import {MainPage} from "./Main/MainPage";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import store, {persistor} from "../redux";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import React from 'react';

describe("when rendered MainPage", () => {
    it("checking that the some texts are displayed", () => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Router>
                            <Routes>
                                <Route path='/' element={<MainPage/>}/>
                            </Routes>
                        </Router>
                    </PersistGate>
                </Provider>
            </React.StrictMode>
        );
        expect(
            screen.getByText('Making health a priority with BeFit')
        ).toBeInTheDocument();
        expect(
            screen.getByText('Who We Are?')
        ).toBeInTheDocument();
    });
    it("checking that the some buttons are displayed", () => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Router>
                            <Routes>
                                <Route path='/' element={<MainPage/>}/>
                            </Routes>
                        </Router>
                    </PersistGate>
                </Provider>
            </React.StrictMode>
        );
        expect(
            screen.getAllByRole("button",  {name: "REGISTRATION"})
        );
        expect(
            screen.getAllByRole("button",  {name: "SIGN IN"})
        );
    });
});
