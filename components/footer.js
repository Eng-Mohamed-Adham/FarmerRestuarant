import { Stack,Grid, Typography} from "@mui/material";
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

   function Footer(){

    const today = new Date();
const year = today.getFullYear() ;




    return(
        <Grid container  direction='row' spacing='4' sx={{
            backgroundColor:'rgba(0, 0, 0, 0.87)',
            // height:'200px',
            marginTop:'0px',
        
            gridTemplateColumns:'repeat(auto-fill,minmax(350px , 1fr))',

        }}
        
        >
       <Grid marginTop='80px' padding='0' sx={{
        marginBottom:'auto',
        marginRight:'auto',
        marginLeft:'auto',

       }}>
       
       <Link href='https://www.facebook.com' passHref>
        <FacebookIcon  sx={{
            // fontSize:'60px',
            // paddingRight:'20px',
        color:'#da3430',
        marginLeft:'80px',
        // transform: 'translate(-50%, 0%)',
        display:'inline-block',
        width:'60px',
        height:'30px',
        paddingLeft:'0',
        margin:'auto',
        textAlign:'center',

        cursor:'pointer'}} />
        
        </Link>
        <Link href='https://www.facebook.com' passHref>
        <YouTubeIcon sx={{
            // fontSize:'60px',
            // paddingRight:'20px',
        color:'#da3430',
        // transform: 'translate(-50%, 0%)',
        display:'inline-block',
        width:'60px',
        height:'30px',
        paddingLeft:'0',
        margin:'auto',
        textAlign:'center',

        cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.facebook.com' passHref>
        <InstagramIcon sx={{
            // fontSize:'60px',
            // paddingRight:'20px',
        color:'#da3430',
        // transform: 'translate(-50%, 0%)',
        display:'inline-block',
        width:'60px',
        height:'30px',
        paddingLeft:'0',
        margin:'auto',
        textAlign:'center',

        cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.facebook.com' passHref>
        <WhatsAppIcon sx={{
        //     fontSize:'60px',
        // paddingRight:'20px',
        color:'#da3430',
        // transform: 'translate(-50%, 0%)',
        display:'inline-block',
        width:'60px',
        height:'30px',
        paddingLeft:'0',
        margin:'auto',
        textAlign:'center',

        cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.facebook.com' passHref>
        <TelegramIcon sx={{
            // fontSize:'60px',
            // paddingRight:'20px',
        color:'#da3430',
        // transform: 'translate(-50%, 0%)',
        display:'inline-block',
        width:'60px',
        height:'30px',
        paddingLeft:'0',
        margin:'auto',
        textAlign:'center',

        cursor:'pointer'}}/>
        </Link>
     
       </Grid>

        <Grid container sx={{marginTop:'50px',padding: '20px 0',}}>
        <span
        style={{
            padding:'20px 0',
            textAlign:'center',
            margin:'auto',
            color:'#da3430',


        }}
         variant='h6' sx={{textAlign:'center',color:'#fff',marginLeft:'10px',transform: {xs:'translate(0%, -100%)',sm:'translate(30%, 50%)',md:'translate(100%, 0%)',xl:'translate(120%, 0%)'}}}>
        Farm Restaurant All Rights Reserved <br />© 2017 - {year}&nbsp;
        
        </span>
        
        </Grid>
     
        </Grid>
    )
}

export default Footer