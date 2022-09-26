import Grid from '@mui/material/Grid';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';





import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#da3430',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

export default function RateSection() {

    const theme = useTheme();

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
    my={4}
    sx={{
        marginTop:'100px',
       marginBottom:'100px'
    }}
>

{itemData.map((item) => {
    return(
        <Card sx={{ display: 'flex', maxHeight:'150px' }} key={item.id}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5"  sx={{ maxWidth: 151,margin:0 }}>
              {item.label}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {item.info}
            </Typography>
          </CardContent>


          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

      <StyledRating
        name="customized-color"
        
        // readOnly
        defaultValue={5}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<LunchDiningIcon fontSize="inherit" />}
        emptyIcon={<LunchDiningIcon fontSize="inherit" />}
      />
     

          </Box>


        </Box>
        <CardMedia
          component="img"
          sx={{ maxWidth: 151,margin:0 }}
          image={`${item.imgPath}`}
          alt={`${item.label}`}
        />
      </Card>
    )
})}

</Grid>
    )
}


const itemData = [
  {
    id:0,
    label:" Super Meal Mix ",
    imgPath:"https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    info:" Mighty Zinger ",
    count:1,
    price:10,
    totalPrice:10
},
{
    id:1,
    label:" MAXX Crunch Twister Box  ",
    imgPath:"https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info:" 2 twister sandwiches " ,
    count:1,
    price:10,
    totalPrice:10
},

{
    id:2,
    label:" Mighty Zinger Box ",
    imgPath:"https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info:" Mighty Zinger ",
    count:1,
    price:10,
    totalPrice:10
},
{
    id:3,
    label:"Lay's MaXx Crunch ",
    imgPath:"https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    info:" Mighty Zinger",
    count:1,
    price:10,
     totalPrice:10  
  },
]