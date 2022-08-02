import { Grid,Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';


  function TitleOfOffers(){
    return(
        <Grid container
         direction='row'
           spacing='4'
            sx={{paddingLeft:'20px',marginTop:'150px',color:'rgba(0, 0, 0, 0.87)'}}>
                        <Typography variant='h4'>
                            <FastfoodIcon sx={{fontSize:'40px'}}/> The best Offers
                        
                        </Typography>
                      

        </Grid>
    )
}


export default TitleOfOffers