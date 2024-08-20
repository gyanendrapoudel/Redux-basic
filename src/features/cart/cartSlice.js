import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";
const initialState={
    cartItems :cartItems,
    amount:4,
    total:0,
    isLoading:true,
}
const cartSlice = createSlice({
   name:'cart',
   initialState,
   reducers:{
    clearCart:(state)=>{
        state.cartItems = []
    },
    removeItem:(state, {payload})=>{
        const id= payload
        state.cartItems = state.cartItems.filter((item) => item.id !== id)
      
    },
    increaseItem: (state,{payload})=>{
        const id =payload
        const item = state.cartItems.find((item)=>item.id===id)
        item.amount +=1;
       
        
    }
    ,
    decreaseItem:(state,{payload})=>{
         const id = payload
         const item = state.cartItems.find((item) => item.id === id)
             item.amount -= 1

           
    },
    calculateTotal:(state)=>{
        const total = state.cartItems.reduce((previousValue, currentValue)=>{
            return previousValue+currentValue.amount*currentValue.price},0)
        state.total = total
        
    }
   }
})
export const {clearCart, removeItem, increaseItem, decreaseItem,calculateTotal} = cartSlice.actions
export default cartSlice.reducer
