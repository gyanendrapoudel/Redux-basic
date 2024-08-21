import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClearBtnClicked: false,
}
const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        confirmClicked:(state)=>{
                state.isClearBtnClicked = !state.isClearBtnClicked
        }
    }


})
export const { confirmClicked } = modalSlice.actions
export default modalSlice.reducer