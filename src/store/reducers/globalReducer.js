import { createSlice } from "@reduxjs/toolkit";

const initialGlobalState = {
    alertModal: {
        enable: false,
        status: "",
        message: "",
    }
}

const globalCreateSlice = createSlice({
    name: "globalReducer",
    initialState: initialGlobalState,
    reducers: {
        toggleAlertModal: (state, action) => {
            state.alertModal.enable = !state.alertModal.enable
            state.alertModal.message = action.payload.message
            state.alertModal.status = action.payload.status
        }
    }
})

export const {
    toggleAlertModal
} = globalCreateSlice.actions

export default globalCreateSlice.reducer;