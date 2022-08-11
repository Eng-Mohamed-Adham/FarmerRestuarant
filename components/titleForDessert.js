import { Grid,Typography } from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';

  function TitleDessert(){
    return(
        <Grid 
        container
         direction='row'
           spacing='4'
            sx={{paddingLeft:'20px',marginTop:'100px',color:'rgba(0, 0, 0, 0.87)'}}>
                        <Typography variant='h4' sx={{color:'#da3430'}} >
                            <CakeIcon sx={{fontSize:'40px'}}/> The best Desserts
                        
                        </Typography>
                      

        </Grid>
    )
}


export default TitleDessert