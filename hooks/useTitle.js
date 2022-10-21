import { Grid,Typography } from "@mui/material";


  function useTitle(Icon,text){

    const titletext =text 
    return(
        <Grid 
        container
         direction='row'
           spacing='4'
            sx={{paddingLeft:'20px',marginTop:'100px',color:'rgba(0, 0, 0, 0.87)'}}>
                        <Typography variant='h4' sx={{color:'#da3430'}}>
                            <Icon sx={{fontSize:'40px'}}/> {titletext}
                        
                        </Typography>
                      

        </Grid>
    )
}


export default useTitle