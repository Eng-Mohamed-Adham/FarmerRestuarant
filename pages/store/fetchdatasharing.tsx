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



export const getDataSharing = createAsyncThunk('/forsharing',async()=> {
    

    const response = await axios.get('./api/forsharing');

    return response.data

});


export const dataforSharingSlice = createSlice({
    name:'fetchdatasharing',
    initialState,
    reducers: {
        incrementSharing:(state ,action) => {
            {
            
              
                state.data.filter(el=> el.id === action.payload ? el.count < 1 ? el.count++ : el.count++ :el )
                
            }

    },
        decrementSharing:(state ,action) => {
            {
            
             
                state.data.filter(el=> el.id === action.payload ? el.count < 1 ? el.count=1 : el.count-- :el )

                
               
            }

},

    
},
        extraReducers : builder => {
            builder.addCase(getDataSharing.pending, state   => {
                state.pending = true;
            })
            .addCase(getDataSharing.fulfilled,(state,{payload}) => {
                state.pending = false;
                state.data = payload;

            })
            .addCase(getDataSharing.rejected,state => {
                state.pending =false;
                state.error =  true;
            })
            
           
        }
        
})

export const selectDataSharing = (state: AppState) => state.fetchdatasharing

export const {incrementSharing,decrementSharing} = dataforSharingSlice.actions
export default dataforSharingSlice.reducer;