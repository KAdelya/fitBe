import { createSlice } from '@reduxjs/toolkit';
import { IFoodItem } from '../../models/IFoodItem';

const initialState: IFoodItem[] = [];

const foodCounterSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        addFoodItem(state, action) {
            state.push({
                name: action.payload.name,
                calories: action.payload.calories,
                carbohydrates: action.payload.carbohydrates,
                fats: action.payload.fats,
                squirrels: action.payload.squirrels,
            });
        },
        removeFoodItem(state, action) {
            state = state.splice(action.payload.index, 1);
        },
        deleteFoodItems(state) {
            state.length = 0;
        }
    }
});

export const { addFoodItem, removeFoodItem, deleteFoodItems } = foodCounterSlice.actions;
export default foodCounterSlice.reducer;