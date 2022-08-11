import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Intro() {
  return (
    <Box sx={{ flexGrow: 1 , marginTop:'50px'}} >
      <Grid container spacing={2} paddingLeft='0px' >
   
        <Grid item xs={12} sm={12} md={6} className='gird' marginBottom='auto'>
          <img className='img-intro' src='https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg' alt='intro' />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{justifyContent: 'center',alignItems: 'center'}}>
              <h4 className='title-name'>farm restaurant</h4> 
              <p className='title-intro'>We offer you with love the best of what we have, visit us once and you will come back every time, our services are unmatched, and our food has a unique taste that you will not find anywhere else</p> 
              <p className='address-intro'><span >Our address:</span><br/>United Kingdom - London - Rainbow StreetYou <br/><span>can also call to us on our number:</span><br/>+1(202)599086824</p> 
        </Grid>
      </Grid>
    </Box>
  );
}
