import { createSlice } from "@reduxjs/toolkit";

const initialChatState = {
    messages: [], // { senderId, receiverId, content, timestamp }
    loading: false,
    error: null
};

const chatSlice = createSlice({
    name: "chat",
    initialState: initialChatState,
    reducers: {
        fetchMessagesRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMessagesSuccess: (state, action) => {
            state.loading = false;
            state.messages = action.payload;
        },
        fetchMessagesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        sendMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        receiveMessage: (state, action) => {
            state.messages.push(action.payload);
        }
    }
});

export const {
    fetchMessagesRequest,
    fetchMessagesSuccess,
    fetchMessagesFailure,
    sendMessage,
    receiveMessage
} = chatSlice.actions;

export default chatSlice.reducer;
