import { createSlice } from '@reduxjs/toolkit';
import { IWaterCounter } from '../../models/IWaterCounter';

const initialState: IWaterCounter = {
    waterCounter: 0,
};
const waterCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setWater: (state, action) => {
            state.waterCounter =  state.waterCounter + action.payload.waterCounter;
        },
        removeWater: (state) => {
            state.waterCounter = 0;
        },
    }
});

export const { setWater, removeWater } = waterCounterSlice.actions;
export default waterCounterSlice.reducer;