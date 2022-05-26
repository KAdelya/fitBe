import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userName: null,
    userSurname: null,
    email: null,
    token: null,
    id: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.userName = action.payload.name;
            state.userSurname = action.payload.surname;

            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.userName = null;
            state.userSurname = null;

            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;