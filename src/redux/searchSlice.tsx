import { createSlice } from "@reduxjs/toolkit"


type searchProps = {
    email:string,
    username:string,
    uid:string,
    pending:boolean
}

const initialState:searchProps = {
    uid: "",
    email: "",
    username: "",
    pending:false,
}

const searchSlice = createSlice({
    name:"searchSlice",
    initialState,
    reducers:{
        search:(state,action) => {
            state.email=action.payload.email
            state.uid=action.payload.uid
            state.username=action.payload.username
        },
        pendingStart:(state) => {
            state.pending=true
        },
        pendingEnd:(state) => {
            state.pending=false
        }
    }
})
export const {search,pendingEnd,pendingStart} = searchSlice.actions
export default searchSlice.reducer
