import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../../components/Themes/Theme';


const initialState: object = {
    themeType: darkTheme,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => action.payload,
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;