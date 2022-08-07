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



export const getDataOnePerson = createAsyncThunk('/oneperson',async()=> {
    

    const response = await axios.get('./api/oneperson');

    return response.data

});


export const dataonepersonSlice = createSlice({
    name:'fetchdataoneperson',
    initialState,
    reducers: {
        incrementOneperson:(state ,action) => {
            {
            
              
                state.data.filter(el=> el.id === action.payload ? el.totalPrice = (++el.count) * el.price:el )
                
            }

    },
        decrementOneperson:(state ,action) => {
            {
            
             
                state.data.filter(el=> el.id === action.payload ? el.count <= 1 ? el.count=1 : el.count-- :el )

                
               
            }

},

    
},
        extraReducers : builder => {
            builder.addCase(getDataOnePerson.pending, state   => {
                state.pending = true;
            })
            .addCase(getDataOnePerson.fulfilled,(state,{payload}) => {
                state.pending = false;
                state.data = payload;

            })
            .addCase(getDataOnePerson.rejected,state => {
                state.pending =false;
                state.error =  true;
            })
            
           
        }
        
})

export const selectDataOnePerson = (state: AppState) => state.fetchdataoneperson

export const {incrementOneperson,decrementOneperson} = dataonepersonSlice.actions
export default dataonepersonSlice.reducer;