import {createSlice} from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

const initialState: IUser = {
    token: '',
    id: '',
    userEmail: '',
    userName: '',
    userSurname: '',
    avatar: '',
    weight: '',
    spendingHours: 0,
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
            state.weight = action.payload.weight;
            state.spendingHours = action.payload.spendingHours;
        },
        setAvatar(state, action){
            state.avatar = action.payload.avatar;
        },
        removeUser(state) {
            state.token = '';
            state.id = '';
            state.userEmail = '';
            state.userName = '';
            state.userSurname = '';
            state.avatar = '';
            state.weight = '';
            state.spendingHours = 0;
        },
    },
});

export const {setUser, removeUser, setAvatar} = userSlice.actions;
export default userSlice.reducer;