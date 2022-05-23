import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';
import timerReducer from './slices/timerSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
        timer: timerReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>