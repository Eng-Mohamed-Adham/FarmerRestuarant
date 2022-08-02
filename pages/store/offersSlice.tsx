import { createSlice } from '@reduxjs/toolkit'


import { AppState } from './index';


 export let initialState =[
    {
        id:1,
        label:"عرض تشارجر الاحتفالي",
        imgPath:"https://bahrain.kfc.me/Images/ItemsImages/Menu3/itm004777.jpg",
        info:"4 تويستر تشارجر + بطاطس عائلي + 1.25 لتر مشروب",
        count:1
    },
    {
        id:2,
        label:"غايمرز بوكس",
        imgPath:"https://bahrain.kfc.me/Images/ItemsImages/Menu3/itm004648.jpg",
        info:"مايتى زنجر سندوتش +بطاطا+بيبسى+كوكيز" ,
        count:1
    },
    
    {
        id:3,
        label:"عرض تشارجر الاحتفالي",
        imgPath:"https://bahrain.kfc.me/Images/ItemsImages/Menu3/itm004777.jpg",
        info:"4 تويستر تشارجر + بطاطس عائلي + 1.25 لتر مشروب",
        count:1
    },
    {
        id:4,
        label:"عرض تشارجر الاحتفالي",
        imgPath:"https://bahrain.kfc.me/Images/ItemsImages/Menu3/itm004777.jpg",
        info:"4 تويستر تشارجر + بطاطس عائلي + 1.25 لتر مشروب",
        count:1
    },
    {
        id:5,
        label:"غايمرز بوكس",
        imgPath:"https://bahrain.kfc.me/Images/ItemsImages/Menu3/itm004648.jpg",
        info:"مايتى زنجر سندوتش +بطاطا+بيبسى+كوكيز" ,
        count:1
    },
    
    {
        id:6,
        label:"عرض تشارجر الاحتفالي",
        imgPath:"https://bahrain.kfc.me/Images/ItemsImages/Menu3/itm004777.jpg",
        info:"4 تويستر تشارجر + بطاطس عائلي + 1.25 لتر مشروب",
        count:1
    },
];












// console.log(initialState)



const offersSlice = createSlice({
    name: 'offersSlice',
    initialState,
    reducers: {
    increment(state,action) {
    {
    
        // state.findIndex((el) => el.id === action.payload  )
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

// export const selectel = (state: AppState) =>  state.offersSlice.




export const { increment, decrement } = offersSlice.actions
export default offersSlice.reducer

// export const selectcounter = (state: AppState) => state.offersSlice;
