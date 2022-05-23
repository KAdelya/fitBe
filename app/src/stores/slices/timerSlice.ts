import { createSlice } from '@reduxjs/toolkit';

interface Props {
    workTime: number;
    roundsCount: number;
}

const initialState: Props = {
    workTime: 0,
    roundsCount: 0
};
const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setWorkTime: (state, action) => {
            state.workTime = action.payload.workTime;
        },
        setRoundsCount: (state, action) => {
            state.roundsCount = action.payload.roundsCount;
        },

    }
});

export const { setWorkTime, setRoundsCount } = timerSlice.actions;
export default timerSlice.reducer;