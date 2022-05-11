import { createSlice } from "@reduxjs/toolkit";

interface Props {
    id: number;
    // tasks: { id: number; title: string; completed: boolean }[];
    tasks: {  title: string }[];
}
const initialState: Props = {
    id: 0,
    tasks: [{ title: ''}],
    // tasks: [{ id: 0, title: '', completed: false }],
};
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            // state.id++;
            // const newTask = {
            //     id: state.id,
            //     title: action.payload,
            //     completed: false,
            // };
            // state.tasks = [newTask, ...state.tasks];
            state.tasks.push({ title: action.payload,})
        },
        // removeTask: (state, action) => {
        //     state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
        // },
        // editTask: (state, action) => {
        //     const task = state.tasks.find((t) => t.id === action.payload.id);
        //     if (task) {
        //         task.title = action.payload.title;
        //     }
        
    }
})

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;