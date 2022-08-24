import type { AppState } from ".";
import { createSlice } from "@reduxjs/toolkit";




export type OrderState = {
    orders: [orders: any]
}


const initialState : OrderState  ={
    orders:[
        {
            id:1,
label:"Salted Caramel Cookie Skillet",
imgPath:"https://images.pexels.com/photos/2878737/pexels-photo-2878737.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
info:" 2 twister sandwiches + 1 pc chicken + fries + coleslaw + Drink ",
count:1,
price:10,
totalPrice:10,
        }
    ]
}


export const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        addorder:(state,action) => {

            state.orders.push(action.payload)

        },
        deleteorder:(state,action) => {
            let itemsOfOrder =state.orders 
            let order : any  =itemsOfOrder.findIndex(e => e.label === action.payload)
            // console.log(order)
            itemsOfOrder.splice(order,1)
            
        }
    }
})




export const selectorders = (state :AppState) => state.orderSlice

export const {addorder,deleteorder } = orderSlice.actions

export default orderSlice.reducer