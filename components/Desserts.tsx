
//Cards
import {
    Stack,
    Grid,
    IconButton,
    
    
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

//get && select Data from fetch offers 
    import {
        getDataDesserts,
        selectDataDesserts
    }from '../pages/store/fetchdatadessert'

// get app hooks from apphooks
    import {
        useAppDispatch,
        useAppSelector
    }from '../pages/store/apphooks'
    








    import {useEffect} from 'react'

    //Actions Of fetchOffers
import {incrementDessert,decrementDessert} from '../pages/store/fetchdatadessert' 

//AddOrder Action for orderSlice
import { addorder } from '../pages/store/orderslice';





function Dessert (){






            //Dispatch Fetch Data from API 
        const dispatchel = useAppDispatch()

       const  dipatchev= useDispatch()
       //Get Data From Fetch Data Offers
        const {
            data,
            pending,
            error,
        } = useAppSelector(selectDataDesserts)

        //orders
        const dispatchOrder = useDispatch()
  


        useEffect(()=> {
            dispatchel(getDataDesserts())
            
        },[])



    
        //Dipatch Add Order To OrderSlice
        const handelOrder =(post: any ) => {
            dispatchOrder(addorder(post))
        }
        

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
                    data.map((post: any,id:number) => (
                        <Card sx={{ maxWidth: 345,height:'350px', }} key={id} >
                          
                        
                            <CardMedia
                                component="img"
                                height="140"
                                image={post.imgPath}
                                alt={post.label}
                            />
                              <Typography gutterBottom variant="h6" component="p" color='error' sx={{fontWeight:'700',maxWidth:'345px'}}>
                                    {post.label}
                            </Typography>
                            <CardActionArea>

                            
                            <Typography variant='h5' sx={{fontSize:'20px',fontWeight:'600'}}>{post.price * post.count}Euro</Typography>
                            

                            <CardContent>
                                <Typography gutterBottom sx={{fontSize:'13px'}} component="p">
                                    {post.info}
                                </Typography>
                            
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="large"  color="error"  variant="contained" onClick={() => handelOrder(post)}  >
                                Order
                            </Button>
                        <ButtonGroup color = 'error'  variant="contained" onClick={() => dipatchev(incrementDessert(id))}>

                            <IconButton color = 'error'  > 
                                    <AddIcon sx={{marginLeft:'5px',marginRight:'5px', }} />
                                    
                            </IconButton>
                            </ButtonGroup>

                            <ButtonGroup color='error'  variant ="contained" onClick={() => dipatchev(decrementDessert(id))} >

                            <IconButton  color='error'   >
                                    <RemoveIcon sx={{marginLeft:'0px',marginRight:'5px', }} />
                                    
                            </IconButton>
                            </ButtonGroup>

                            
                                
                            </CardActions>
                    </Card>
                    ))
                } 
    
            
            </Grid>
        
        )
    }
    
    
    export default Dessert
