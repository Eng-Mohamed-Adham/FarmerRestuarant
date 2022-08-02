import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


 const dataOfFood =[
    {
        id:1,
        label:'This impressive paella is a perfect ',
        imgPath:'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        body:'This impressive paella is a perfect This impressive paella is a perfect This impressive paella is a perfect This impressive paella is a perfect '
    },
    {
        id:2,
        label:'This impressive paella is a perfect ',
        imgPath:'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        body:'This impressive paella is a perfect This impressive paella is a perfect This impressive paella is a perfect This impressive paella is a perfect '
    },
    {
        id:3,
        label:'This impressive paella is a perfect ',
        imgPath:'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        body:'This impressive paella is a perfect This impressive paella is a perfect This impressive paella is a perfect This impressive paella is a perfect '
    },
    {
        id:4,
        label:'This impressive paella is a perfect ',
        imgPath:'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        body:'This impressive paella is a perfect This impressive paella is a perfect This impressive paella is a perfect This impressive paella is a perfect '
    },
]


 export function Section2() {

    return(
        
      
        <Grid
        container
        my={6}
        rowSpacing='4'
        columnSpacing='xs:2,sm:4,md:4'
        direction='row'
        justifyContent='center'
        alignItems='center'
        gap='20px'
        item xs={2} sm={4} md={4}
        spacing='3'
     
        
        >

                
                {dataOfFood.map(food => (
                    <div key={food.id}>
                            <Card  sx={{ maxWidth: 300 }} spacing='4' >
                            {/* <CardHeader
                                
                                
                                title={food.label}
                            /> */}
                            {/* <h4>{food.label}</h4> */}
                            <CardMedia
                                component="img"
                                height="194"
                                image={food.imgPath}
                                alt={food.label}
                                
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                {food.body}
                                </Typography>
                                <br/>
                                <ButtonGroup variant="outlined" aria-label="outlined primary button group" >
                                    <Button size='medum' color='success'  >Order</Button>
                                    
                                    </ButtonGroup>
                            </CardContent>
                        
                        </Card>
                        </div>
                )
                )
                            }

        </Grid>
    )
}


// export default Section2