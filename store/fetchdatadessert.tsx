import type   {AppState} from './index'
import { createSlice,
    createAsyncThunk
 } from '@reduxjs/toolkit';

 import axios from 'axios';

 import produce from 'immer';



export type DataState = {
    data : [data: any];
    pending: Boolean;
    error:Boolean;
};


const initialState : DataState = {
    data : ['Uploading Data'],
    pending:false,
    error:false,
};



export const getDataDesserts = createAsyncThunk('/desserts',async()=> {
    

    const response = await axios.get('./api/desserts');

    return response.data

});


export const dataDessertsSlice = createSlice({
    name:'fetchdatadesserts',
    initialState,
    reducers: {
        incrementDessert:(state ,action) => {
            {
            
              
                state.data.filter(el=> el.id === action.payload ? el.totalPrice = (++el.count) * el.price:el )
                
            }

    },
        decrementDessert:(state ,action) => {
            {
            
             
                state.data.filter(el=> el.id === action.payload ? el.count <= 1 ? el.count=1 : el.count-- :el )

                
               
            }

},

    
},
        extraReducers : builder => {
            builder.addCase(getDataDesserts.pending, state   => {
                state.pending = true;
            })
            .addCase(getDataDesserts.fulfilled,(state,{payload}) => {
                state.pending = false;
                state.data = payload;

            })
            .addCase(getDataDesserts.rejected,state => {
                state.pending =false;
                state.error =  true;
            })
            
           
        }
        
})

export const selectDataDesserts = (state: AppState) => state.fetchdatadesserts

export const {incrementDessert,decrementDessert} = dataDessertsSlice.actions
export default dataDessertsSlice.reducer;