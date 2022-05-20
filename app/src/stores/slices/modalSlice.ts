import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isOpened: boolean;
    isConfirmed: boolean;
}

const initialState: ModalState = {
    isOpened: false,
    isConfirmed: false,
}
const confirmationModalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        open: (state, action) => {
            state.isOpened = true;
            state.isConfirmed = false;
          },
          confirm: (state, action) => {
            state.isConfirmed = true;
            state.isOpened = false;
          }
    }
})

export const { open, confirm } = confirmationModalSlice.actions;
export default confirmationModalSlice.reducer;