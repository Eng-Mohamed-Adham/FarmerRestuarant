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



export const getDataOffers = createAsyncThunk('/offers',async()=> {
    

    const response = await axios.get('./api/offers');

    return response.data

});


export const dataoffersSlice = createSlice({
    name:'fetchdataoffers',
    initialState,
    reducers: {
        incrementOffers:(state ,action) => {
            {
            
              
                state.data.filter(el=> el.id === action.payload ? el.count < 1 ? el.count++ : el.count++ :el )
                
            }

    },
        decrementOffers:(state ,action) => {
            {
            
             
                state.data.filter(el=> el.id === action.payload ? el.count < 1 ? el.count=1 : el.count-- :el )

                
               
            }

},

    
},
        extraReducers : builder => {
            builder.addCase(getDataOffers.pending, state   => {
                state.pending = true;
            })
            .addCase(getDataOffers.fulfilled,(state,{payload}) => {
                state.pending = false;
                state.data = payload;

            })
            .addCase(getDataOffers.rejected,state => {
                state.pending =false;
                state.error =  true;
            })
            
           
        }
        
})

export const selectData = (state: AppState) => state.fetchdataoffers

export const {incrementOffers,decrementOffers} = dataoffersSlice.actions
export default dataoffersSlice.reducer;