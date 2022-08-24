import { configureStore,createAsyncThunk,ThunkAction,
    createSlice } from '@reduxjs/toolkit'

import { createWrapper } from 'next-redux-wrapper'
import { Action } from 'redux';



import dataoffersSlice from './fetchdataoffers'
import  orderSlice  from './orderslice';

import dataonepersonSlice from './fetchdataoneperson'

import dataforSharingSlice from './fetchdatasharing'

import dataDessertsSlice from './fetchdatadessert'
import axios from 'axios';






export const makeStore = () => configureStore({
    reducer:{
        // counterSlice,
        // offersSlice,
        // OffersData,
        fetchdataoffers:dataoffersSlice,
        orderSlice,
        fetchdataoneperson:dataonepersonSlice,
        fetchdatasharing:dataforSharingSlice,
        fetchdatadesserts:dataDessertsSlice,
        



    },
    // devTools:true
})



export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore['getState']>


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;



export type AppDispatch = ReturnType< AppStore['dispatch']>


export const wrapper : any  = createWrapper(makeStore)