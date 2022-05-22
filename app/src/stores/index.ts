import {configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import toodoReducer from './slices/todoSlice'
import modalReducer from './slices/modalSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: toodoReducer,
        modal: modalReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>