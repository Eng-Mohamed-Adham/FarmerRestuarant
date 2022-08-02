import { configureStore,createAsyncThunk,ThunkAction,
    createSlice } from '@reduxjs/toolkit'

import counterSlice from './ProductSlice'
import { createWrapper } from 'next-redux-wrapper'
import { Action } from 'redux';



import dataoffersSlice from './fetchdataoffers'
import  orderSlice  from './orderslice';

import dataonepersonSlice from './fetchdataoneperson'

import dataforSharingSlice from './fetchdatasharing'

import axios from 'axios';



// export type OffersState = {
//     data:{load: string};
//     pending :boolean;
//     error:boolean;
// };
// const initialState : OffersState = {
//     data:{load:'Click that button'},
//     pending:false,
//     error:false,

// }


// export const getOffersData = createAsyncThunk('offers/offersdata',async () => {
//     const response = await axios.get('../pages/api/offers/index.js')
//     return response.data
// })


// export const OffersData = createSlice({
//     name:'offersdata',
//     initialState,
//     reducers:{

//     },
//     extraReducers:builder => {
//         builder
        // .addCase(getOffersData.pending, state => {
        //     state.pending = true;
        // })
        // .addCase(getOffersData.fulfilled,(state,{payload}) => {
        //     state.pending = false;
        //     state.data = payload;
        // })
        // .addCase(getOffersData.rejected,state => {
        //     state.pending =false;
        //     state.error =  true;
        // })
//     }
// })


// const store = configureStore({ reducer: counterSlice })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on


export const makeStore = () => configureStore({
    reducer:{
        // counterSlice,
        // offersSlice,
        // OffersData,
        fetchdataoffers:dataoffersSlice,
        orderSlice,
        fetchdataoneperson:dataonepersonSlice,
        fetchdatasharing:dataforSharingSlice,
        



    },
    // devTools:true
})



export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore['getState']>

// export type AppDispatch = typeof makeStore.dispatch;
// export type AppState = ReturnType<typeof makeStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;



// export const selectoffersdata = (state : AppStore ) => state.OffersData

// export default OffersData.reducer

export const wrapper : any  = createWrapper(makeStore)