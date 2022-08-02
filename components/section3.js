import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from 'next/link'

import Grid from '@mui/material/Grid'


export  function Section3 () {
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
        sx={{
            // marginRight:'100px'
            backgroundColor:'rgb(229 55 55 / 87%)',
            height:'200px',
            marginTop:'100px'            
        }}
        
        >
                <Stack direction='row' spacing='4'>
                <Link href='https://www.facebook.com' passHref>
                <FacebookIcon  sx={{fontSize:'50px',color:'rgba(0, 0, 0, 0.87)',marginLeft:'80px',transform: 'translate(-50%, 0%)',cursor:'pointer'}} />
                
                </Link>
                <Link href='https://www.facebook.com' passHref>
                <YouTubeIcon sx={{fontSize:'50px',color:'rgba(0, 0, 0, 0.87)',transform: 'translate(-50%, 0%)',cursor:'pointer'}}/>
                </Link>

                <Link href='https://www.facebook.com' passHref>
                <InstagramIcon sx={{fontSize:'50px',color:'rgba(0, 0, 0, 0.87)',transform: 'translate(-50%, 0%)',cursor:'pointer'}}/>
                </Link>

                <Link href='https://www.facebook.com' passHref>
                <WhatsAppIcon sx={{fontSize:'50px',color:'rgba(0, 0, 0, 0.87)',transform: 'translate(-50%, 0%)',cursor:'pointer'}}/>
                </Link>

                <Link href='https://www.facebook.com' passHref>
                <TelegramIcon sx={{fontSize:'50px',color:'rgba(0, 0, 0, 0.87)',transform: 'translate(-50%, 0%)',cursor:'pointer'}}/>
                </Link>

                </Stack>
                <Stack direction='row' spacing='4'sx={{display: { xs: 'none', md: 'flex' }}}>
                    <Typography variant='h5' size='medum' sx={{color:'rgba(0, 0, 0, 0.87)'}}>
                    impressive paella is a perfect
                    </Typography>
                </Stack>

               
            
        </Grid>
    )
}

// export default Section3