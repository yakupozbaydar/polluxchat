import { createSlice } from "@reduxjs/toolkit"


type searchProps = {
    email:string,
    username:string,
    uid:string,
}

const initialState:searchProps = {
    uid: "",
    email: "",
    username: ""
}

const searchSlice = createSlice({
    name:"searchSlice",
    initialState,
    reducers:{
        search:(state,action) => {
            state.email=action.payload.email
            state.uid=action.payload.uid
            state.username=action.payload.username
        }
    }
})
export const {search} = searchSlice.actions
export default searchSlice.reducer
