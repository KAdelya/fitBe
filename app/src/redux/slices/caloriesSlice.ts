import { createSlice } from '@reduxjs/toolkit';

interface ICounter {
    calories: number,
    squirrels: number,
    fats: number,
    carbohydrates: number,
}

const initialState: ICounter = {
    calories: 0,
    squirrels: 0,
    fats: 0,
    carbohydrates: 0,
};
const caloriesSlice = createSlice({
    name: 'calories',
    initialState,
    reducers: {
        setCalories: (state, action) => {
            state.calories = state.calories + action.payload.calories;
            state.squirrels = state.squirrels + action.payload.squirrels;
            state.fats = state.fats + action.payload.fats;
            state.carbohydrates = state.carbohydrates + action.payload.carbohydrates;
        },
        deleteCalories: (state) => {
            state.calories = 0;
            state.squirrels = 0;
            state.fats = 0;
            state.carbohydrates = 0;
        },
    }
});

export const { setCalories, deleteCalories } = caloriesSlice.actions;
export default caloriesSlice.reducer;