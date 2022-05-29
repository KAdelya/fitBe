import {createSlice} from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

const initialState: IUser = {
    token: null,
    id: null,
    userEmail: null,
    userName: null,
    userSurname: null,
    avatar: null,
    weight: null,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.userEmail = action.payload.userEmail;
            state.userName = action.payload.userName;
            state.userSurname = action.payload.userSurname;
            state.avatar = action.payload.avatar;
        },
        setAvatar(state, action){
            state.avatar = action.payload.avatar;
        },
        removeUser(state) {
            state.token = null;
            state.id = null;
            state.userEmail = null;
            state.userName = null;
            state.userSurname = null;
            state.avatar = null;
        },
    },
});

export const {setUser, removeUser, setAvatar} = userSlice.actions;
export default userSlice.reducer;