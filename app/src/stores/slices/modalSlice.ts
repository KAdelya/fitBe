
import { createSlice } from '@reduxjs/toolkit';

// interface ModalState {
//     isOpened: boolean;
//     isConfirmed: boolean;
// }

// const initialState: ModalState = {
//     isOpened: false,
//     isConfirmed: false,
// }
// const confirmationModalSlice = createSlice({
//     name: 'modals',
//     initialState,
//     reducers: {
//         open: (state, action) => {
//             state.isOpened = true;
//             state.isConfirmed = false;
//         },
//         confirm: (state, action) => {
//             state.isConfirmed = true;
//             state.isOpened = false;
//         }
//     }
// })


interface Modal {
  show: boolean;
}
const initialmodalState: Modal = {
    show: true,
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
