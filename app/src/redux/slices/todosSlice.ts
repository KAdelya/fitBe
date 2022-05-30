import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../models/ITodo';


const initialState: ITodo[] = [{
    title: null,
    date: null,
    completed: false,
}];

const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push({
                title: action.payload.title,
                date: new Date().toDateString(),
                completed: false,
            });
        },
        markTodo(state, action) {
            state[action.payload.index].completed = true;
        },
        removeTodo(state, action) {
            state = state.splice(action.payload.index, 1);
        },
        deleteTodos(state) {
            state = [];
        }
    },
});

export const { addTodo, markTodo, removeTodo, deleteTodos } = todoSlice.actions;

export default todoSlice.reducer;