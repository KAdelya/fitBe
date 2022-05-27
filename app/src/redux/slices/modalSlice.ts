import { createSlice } from '@reduxjs/toolkit';

interface Modal {
  show: boolean;
}
const initialmodalState: Modal = {
    show: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialmodalState,
    reducers: {
        setModal: (state, action) => {
            state.show = action.payload.show;
        },
    },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
