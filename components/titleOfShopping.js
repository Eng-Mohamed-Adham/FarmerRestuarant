import { Grid,Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';


  function TitleShopping(){
    return(
        <Grid 
        container
         direction='row'
           spacing='4'
            sx={{paddingLeft:'20px',marginTop:'100px',color:'rgba(0, 0, 0, 0.87)'}}>
                        <Typography variant='h4'>
                            <FastfoodIcon sx={{fontSize:'40px'}}/> Your Order :) 
                        </Typography>
                      

        </Grid>
    )
}


export default TitleShopping