import { createSlice } from '@reduxjs/toolkit'


import { AppState } from './index';


 export let initialState =[
  
];















const offersSlice = createSlice({
    name: 'offersSlice',
    initialState,
    reducers: {
    increment(state,action) {
    {
    
        state.forEach(el => el.id == action.payload  ? el.count < 1 ? el.count = 0 : el.count++ :el)
    
        
    }

    

    },
    decrement(state,action) {
        {
        
            state.forEach(el => el.id == action.payload  ? el.count < 1 ? el.count = 0 : el.count-- :el)
        }



    }
},


})





export const { increment, decrement } = offersSlice.actions
export default offersSlice.reducer

