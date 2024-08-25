import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";
import axios from "axios";

const url = 'https://www.course-api.com/react-useReducer-cart-project '

 

const initialState={
    cartItems :[],
    amount:4,
    total:0,
    isLoading:true,
}
export const fetchCartItems =
  createAsyncThunk('cart/fetchCartItems', async () => {
   try {
     const response = await axios(url)
     return response.data
   } catch (error) {
    return isRejectedWithValue(error.response)
    
   }
  })
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

        const amount = state.cartItems.reduce(
          (acc, item) => acc + item.amount,
          0
        )
        state.amount = amount
    }
   },
   extraReducers:(builder)=>{
    builder.addCase(fetchCartItems.pending,(state,action)=>{
        state.isLoading =true
          
    })
    .addCase(fetchCartItems.fulfilled,(state,action)=>{
          state.isLoading = false
          state.cartItems = action.payload
    
    })
    .addCase(fetchCartItems.rejected,(state,action)=>{
        state.isLoading = false
        
    })
   }
})
export const {clearCart, removeItem, increaseItem, decreaseItem,calculateTotal} = cartSlice.actions
export default cartSlice.reducer
