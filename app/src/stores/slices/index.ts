import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import toodoReducer from './todoSlice'

export const store = configureStore({
    reducer:{
        user: userReducer,
        todos: toodoReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>