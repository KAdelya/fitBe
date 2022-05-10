import { createSlice } from "@reduxjs/toolkit";

interface TaskState {
    id: number;
    tasks: { id: number; title: string; completed: boolean }[];
    selectedTask: { id: number; title: string; completed: boolean };
}
const initialState: TaskState = {
    id: 0,
    tasks: [{ id: 0, title: '', completed: false }],
    selectedTask: { id: 0, title: '', completed: false },
};
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.id++;
            const newTask = {
                id: state.id,
                title: action.payload,
                completed: false,
            };
            state.tasks = [newTask, ...state.tasks];
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
        },
        editTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
            }
        },
    }
})

export const { addTask, removeTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;