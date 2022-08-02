import { Stack,Grid, Typography} from "@mui/material";
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

   function Footer(){
    return(
        <Grid container  direction='row' spacing='4' sx={{
            backgroundColor:'rgba(0, 0, 0, 0.87)',
            height:'200px',
            marginTop:'0px',
        


        }}>
       <Grid>
           
       <Link href='https://www.facebook.com' passHref>
        <FacebookIcon  sx={{fontSize:'60px',paddingRight:'20px',color:'#fff',marginLeft:'80px',transform: 'translate(-50%, 0%)',cursor:'pointer'}} />
        
        </Link>
        <Link href='https://www.facebook.com' passHref>
        <YouTubeIcon sx={{fontSize:'60px',paddingRight:'20px',color:'#fff',transform: 'translate(-50%, 0%)',cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.facebook.com' passHref>
        <InstagramIcon sx={{fontSize:'60px',paddingRight:'20px',color:'#fff',transform: 'translate(-50%, 0%)',cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.facebook.com' passHref>
        <WhatsAppIcon sx={{fontSize:'60px',paddingRight:'20px',color:'#fff',transform: 'translate(-50%, 0%)',cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.facebook.com' passHref>
        <TelegramIcon sx={{fontSize:'60px',paddingRight:'20px',color:'#fff',transform: 'translate(-50%, 0%)',cursor:'pointer'}}/>
        </Link>
       </Grid>

        <Grid container sx={{marginTop:'50px'}}>
        <Typography variant='h6' sx={{color:'#fff',marginLeft:'10px',transform: {xs:'translate(0%, -100%)',sm:'translate(30%, 50%)',md:'translate(100%, 0%)',xl:'translate(120%, 0%)'}}}>
        © 2017 - 2022&nbsp;McDonald's. All Rights Reserved
        
        </Typography>
        
        </Grid>
     
        </Grid>
    )
}

export default Footer