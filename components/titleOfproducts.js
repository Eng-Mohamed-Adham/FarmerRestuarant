import { Grid,Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';


 export function TitleOfProducts(){
    return(
        <Grid container direction='row'  spacing='4' sx={{marginTop:'50px',color:'rgba(0, 0, 0, 0.87)'}}>
                        <Typography variant='h4' paddingLeft='20px'>
                            <FastfoodIcon sx={{fontSize:'40px'}}/> Pest Products
                        
                        </Typography>
                      

        </Grid>
    )
}


// export default TitleOfProducts