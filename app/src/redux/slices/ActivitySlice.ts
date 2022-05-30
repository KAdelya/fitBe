import { createSlice } from '@reduxjs/toolkit';
import { IUserActivity } from '../../models/IUserActivity';

const initialState: IUserActivity = {
    weight: 0,
    height: 0,
    age: 0,
    generalCalories: 0,
    visible: true,
};
const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.weight = action.payload.weight;
            state.height = action.payload.height;
            state.age = action.payload.age;
        },
        setGeneralCalories(state){
            state.generalCalories = Math.round(655 + 9.53 * state.weight + 1.85 * state.height - 4.67 * state.age);
        },
        setInvisible(state){
            state.visible = false;
        },
        deleteInfo: (state) => {
            state.weight = 0;
            state.height = 0;
            state.age = 0;
        },
    }
});

export const { setInfo, deleteInfo, setGeneralCalories, setInvisible } = activitySlice.actions;
export default activitySlice.reducer;