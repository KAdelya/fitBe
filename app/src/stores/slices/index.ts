import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice'
import toodoReducer from './todoSlice'
import modalReducer from './modalSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: toodoReducer,
        modals: modalReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>