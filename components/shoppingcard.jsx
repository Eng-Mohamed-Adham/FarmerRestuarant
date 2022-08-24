
//Cards
import {
    Stack,
    Grid,
    IconButton,
    Box,
    Divider
    
    
    } from '@mui/material'
    
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import { Button, CardActionArea, CardActions } from '@mui/material';
    
    
    import AddIcon from '@mui/icons-material/Add';
    import RemoveIcon from '@mui/icons-material/Remove';
    import EuroIcon from '@mui/icons-material/Euro';
    import ButtonGroup from '@mui/material/ButtonGroup';

    //redux elments
    import {useDispatch,useSelector} from 'react-redux'



// get app hooks from apphooks
    import {
        useAppDispatch,
        useAppSelector
    }from '../store/apphooks'
    




//AddOrder Action for orderSlice
import { addorder,deleteorder } from '../store/orderslice';
import { selectorders } from '../store/orderslice';


import { useEffect } from 'react';


function Shopping (){






        
    
        //orders
                const {orders} = useAppSelector(selectorders)
        
        const dispatchOrder = useDispatch()
  


        const handeldelete = (uniq_Id ) =>{
            dispatchOrder(deleteorder(uniq_Id))
            // console.log(uniq_Id)
        
          }
          const handelSumation = ()=> {

            let prices = orders.map((e ,id) => {return(e.totalPrice)})
            


            let summation = prices.reduce (function(accumulator,currentValue){ return accumulator + currentValue} ,0)



           
            return summation
          }

          useEffect(()=> {
            handelSumation()
          })

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
                marginTop:'50px'
            }}
    
            >


{
                orders.map((e,id) => {
                  return(
                    // <MenuItem key={id} onClick={handleClose}>{e.label}</MenuItem>
                    <Box key={id}>
                    <Card sx={{ display: 'flex' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          {e.label}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ width:'348px' }}>
                          {e.info}
                        </Typography>
                        <Typography component="div" variant="h5">
                          Count: {e.count}
                        </Typography>
                        <Typography component="div" variant="h5">
                        Unit price: {e.price}
                        </Typography>
                        <Button size="large"  color="error"   variant="contained" onClick={() => handeldelete(e.label)}  >
                                Delete
                            </Button>
                      </CardContent>
                   
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ maxWidth: 151 }}
                      image={e.imgPath}
                      alt="Live from space album cover"
                    />
                    
                  </Card>
                  <Divider />
                  </Box>
                  )
                 })
              }
    
             <Box>
                <Typography>
                  TotalPrice: {handelSumation()}
                 </Typography>
              </Box>
            </Grid>
        
        )
    }
    
    
    export default Shopping
