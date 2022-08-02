import {
Grid,
Stack,
TextField,
Typography,
Button,
ButtonGroup,
Select,
Box,


}from '@mui/material'

// import {useState,useEffect} from 'react'



import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../pages/store/offersSlice';
import { auth, onAuthStateChanged, app,database } from '../config/fbconfig';

import {collection,addDoc} from 'firebase/firestore'

function AddOffers() {
const [label,setLabel]= useState<string | null >('')

const [img,setImg]= useState<string | null >('')
const [info,setInfo]= useState<string | null >('')
const [type,setType]= useState<string | null >('')

const [count,setCount]= useState<Number | null >(1)
const [price,setPrice]= useState<Number | null >(1)

const databaseRef = collection(database, 'my-app')


const addData = () => {
    addDoc(databaseRef, {
        count:count,
        imgpath:img,
        info:info,
        label:label,
        price:price,
        type:type
    })
    .then(() => {
        alert("Data Send")
    })
    .catch((err) => {
        console.error(err)
    })
}

// const user = useSelector(selectUser);
  const dispatch = useDispatch();



// useEffect(() => {
//     onAuthStateChanged(auth, (userAuth) => {
//         if (userAuth) {
//           // user is logged in, send the user's details to redux, store the current user in the state
//           dispatch(
//             increment({
//               email: userAuth.email,
//               uid: userAuth.uid,
//               displayName: userAuth.displayName,
//               photoUrl: userAuth.photoURL,
//             })
//           );
//         } else {
//           dispatch(increment(2));
//         }
//       });

// // console.log('count: ' + count + 'price: ' + price)
// } , [])

    return(
        <Grid
        container
            rowSpacing='4'
            columnSpacing='xs:2,sm:4,md:4'
            direction='row'
            justifyContent='center'
            alignItems='center'
            gap='20px'
            item xs={2} sm={4} md={4}
            spacing='3'
            my={4}
            sx={{
                marginTop:'50px',
                marginLeft:'50px',
            }}
        >
    
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"

            item xs={2} sm={4} md={4}
            >
                <Typography
                variant='h3'
                color='seccess'
                >
                    Adding CardFood to Resturant
                </Typography>
            <div>
                <TextField
                required
                id="outlined-disabled"
                label="label"
                // defaultValue=""
                type='text'
                
                onChange={(e) => setLabel(e.target.value)}
                value={label}
                />
                <TextField
                required
                onChange={(e) => setImg(e.target.value)}
                value={img}

                id="outlined-disabled"
                // label="uploadImage"
                // defaultValue="Hello World"
                type='text'
                />
                <TextField
                id="outlined-required"
                onChange={(e) => setInfo(e.target.value)}
                value={info}
                label="Info"
                type="text"
                // autoComplete="current-password"
                />
              
      
      </div>
      <div>
      <TextField
                id="outlined-required"
                onChange={(e) => setType(e.target.value)}
                value={type}
                label="Type"
                type="text"
                // autoComplete="current-password"
                />
                
                
                
        <TextField
          id="outlined-number"
          onChange={(e) => setCount(e.target.value)}
                value={count}
          label="Count"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          id="outlined-number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          label="Price"
          type="number"     
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
     <Button onClick={addData}
      variant='outlined' sx={{marginLeft:'15px'}} >
        Add
     </Button>
      
    </Box>



        </Grid>
    )
}


export default AddOffers