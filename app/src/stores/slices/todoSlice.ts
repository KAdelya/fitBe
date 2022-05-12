import { createSlice } from "@reduxjs/toolkit";

interface Props {
    id: number;
    // tasks: { id: number; title: string; completed: boolean }[];
    tasks: {  id: number, title: string, completed: boolean }[];
}
const initialState: Props = {
    id: 0,
    tasks: [{ id: 0, title: '', completed: false}],
    // tasks: [{ id: 0, title: '', completed: false }],
};
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.id++;
            state.tasks.push({ id: state.id ,title: action.payload, completed: false})
        },
        removeTask: (state, action) => {
            // state.tasks.filter((item) => item.id !== action.payload.id)
            // state.id -= 1;
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        },
        
    }
})

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;