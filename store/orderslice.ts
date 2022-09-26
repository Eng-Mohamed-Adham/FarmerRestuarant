import type { AppState } from ".";
import { createSlice } from "@reduxjs/toolkit";




export type OrderState = {
    orders: [orders: any ]
}


const initialState : OrderState  ={
    orders:[

    "no products"


    ]
}


export const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        addorder:(state,action) => {

            // let itemsOfOrder =state.orders
            // let order : any  =itemsOfOrder.findIndex(e => e ===  "no products" )
            // console.log(order)
            
            let itemnull = state.orders[0]

            if(itemnull === "no products" ){
                state.orders.splice(itemnull,1);
                state.orders.push(action.payload)
            }else{
                state.orders.push(action.payload)
            }
            

            // state.orders.push(action.payload)

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