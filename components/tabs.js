import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function BasicTabs() {




  return (
    // <Box sx={{ width: '100%', height: '100%', overflowY: 'hidden', marginTop:'100px' }} >
    
      // {
        <ul 
 
      variant="standard"
      className='list-item'
      >
          {
            itemData.map((e) => (
              <ImageListItem 
              key={e.label}
              className='img-list'
              style={{
                width :'300px',
                height:'450px'
              }}

              >
                <img
                // className='img-list'
                src={e.imgPath}
                alt={e.label}
                loading="lazy"
                style={{
                width :'300px',
                height:'350px'
              }}
                
                />
                  <ImageListItemBar
                    title={e.label}
                    subtitle={<span>by: {e.info}</span>}
                    position="below"
                     />
              </ImageListItem>
            ))
          }
        </ul>
      // }
    // </Box>
  );
}

const itemData = [
  {
    id:0,
    label:" Super Meal Mix ",
    imgPath:"https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    info:" Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
    count:1,
    price:10,
    totalPrice:10
},
{
    id:1,
    label:" MAXX Crunch Twister Box  ",
    imgPath:"https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info:" 2 twister sandwiches + 1 pc chicken + fries + coleslaw + Drink " ,
    count:1,
    price:10,
    totalPrice:10
},

{
    id:2,
    label:" Mighty Zinger Box ",
    imgPath:"https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info:" Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
    count:1,
    price:10,
    totalPrice:10
},
{
    id:3,
    label:" Double Twister Box  ",
    imgPath:"https://images.pexels.com/photos/2871755/pexels-photo-2871755.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    info:" Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
    count:1,
    price:10,
    totalPrice:10
},
{
    id:4,
    label:" MAXX Crunch Twister Combo ",
    imgPath:"https://images.pexels.com/photos/9045145/pexels-photo-9045145.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    info:" 2 twister sandwiches + 1 pc chicken + fries + coleslaw + Drink " ,
    count:1,
    price:10,
    totalPrice:10
},

{
    id:5,
    label:"Lay’s Maxx Crunch Strips Meal  ",
    imgPath:"https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info:" Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
    count:1,
    price:10,
    totalPrice:10   
},
{
  id:6,
  label:"  12 Pcs. Lay's MaXx Crunch Bucket   ",
  imgPath:"https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  info:" Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
  count:1,
  price:10,
   totalPrice:10  
},
{
  id:7,
  label:"  8 Pcs. Lay's MaXx Crunch Bucket    ",
  imgPath:"https://images.pexels.com/photos/1707917/pexels-photo-1707917.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  info:" 2 twister sandwiches + 1 pc chicken + fries + coleslaw + Drink " ,
  count:1,
  price:10,
   totalPrice:10  
},

{
  id:8,
  label:"  18 Pcs. Lay's MaXx Crunch Bucket   ",
  imgPath:"https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  info:" Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
  count:1,
  price:10,
   totalPrice:10  
},
{
  id:9,
  label:" 24 Pcs. Lay's MaXx Crunch Bucket    ",
  imgPath:"https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  info:" Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
  count:1,
  price:10,
   totalPrice:10  
},
{
  id:10,
  label:" 8 Pcs. Lay's MaXx Crunch Half & Half Bucket ",
  imgPath:"https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  info:" 2 twister sandwiches + 1 pc chicken + fries " ,
  count:1,
  price:10,
   totalPrice:10  
},

{
  id:11,
  label:" 12 Pcs. Lay's MaXx Crunch Half & Half Bucket   ",
  imgPath:"https://images.pexels.com/photos/751798/pexels-photo-751798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  info:" Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
  count:1,
  price:10,
   totalPrice:10  
},
];
