import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import timerReducer from './slices/timerSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';
import todosReducer from './slices/todosSlice';
import counterReducer from './slices/counterSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
    modal: modalReducer,
    timer: timerReducer,
    theme: themeReducer,
    user: userReducer,
    todoList: todosReducer,
    counter: counterReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>