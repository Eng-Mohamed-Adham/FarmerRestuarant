import { Grid,Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

  function TitleForSharing(){
    return(
        <Grid 
        container
         direction='row'
           spacing='4'
            sx={{paddingLeft:'20px',marginTop:'100px',color:'rgba(0, 0, 0, 0.87)'}}>
                        <Typography variant='h4' sx={{color:'#da3430'}}>
                            <FamilyRestroomIcon sx={{fontSize:'40px'}}/> The best to Sharing
                        
                        </Typography>
                      

        </Grid>
    )
}


export default TitleForSharing