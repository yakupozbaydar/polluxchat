import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

const initialState = {
    user: {},
    chatId: "",
}
const chatSlice = createSlice({
    name: "chatSlice",
    initialState,
    reducers: {
        changeChat: (state, action) => {
            state.user = action.payload.userInfo
            state.chatId =
                action.payload.currentUserUid > action.payload.userInfo.uid
                    ? action.payload.currentUserUid + action.payload.userInfo.uid
                    : action.payload.userInfo.uid + action.payload.currentUserUid;
        }
    }
});

export const {changeChat } = chatSlice.actions

export default chatSlice.reducer
