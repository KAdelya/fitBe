import { createSlice } from '@reduxjs/toolkit';
import { ICounters } from '../../models/ICounters';

const initialState: ICounters = {
    waterCounter: 0,
    foodCounter: 0
};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter: (state, action) => {
            state.waterCounter = action.payload.waterCounter;
            state.foodCounter = action.payload.foodCounter;
        },
        removeCounter: (state) => {
            state.waterCounter = 0;
            state.foodCounter = 0;
        },
    }
});

export const { setCounter, removeCounter } = counterSlice.actions;
export default counterSlice.reducer;