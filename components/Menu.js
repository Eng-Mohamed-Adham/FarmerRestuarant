import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import Link from 'next/link';

import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

import FastfoodIcon from '@mui/icons-material/Fastfood';

import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



import Divider from '@mui/material/Divider';




import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import { CardActionArea, CardActions } from '@mui/material';



import { useAppSelector } from '../pages/store/apphooks';

import { selectorders } from '../pages/store/orderslice';

import { deleteorder } from '../pages/store/orderslice';


import {useDispatch,useSelector} from 'react-redux'


const pages = ['DEALS', 'FORONE', 'For Sharing','SIDES&DESSERTS','SHOPPINGCARD'];


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

 export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };




  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  const {orders} = useAppSelector(selectorders)
  const dispatchOrder = useDispatch()


  const handeldelete = (uniq_Id ) =>{
    dispatchOrder(deleteorder(uniq_Id))
    // console.log(uniq_Id)

  }
  return (
    <main>
      <AppBar position="fixed" color="info"
     sx={{
      backgroundColor:'rgb(229 55 55 / 87%)'
      
      // rgba(103,185,245,0.87)
     }}
        >
      <Container maxWidth="xl"  >
        <Toolbar disableGutters>
          <FastfoodIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ffee0a',
              textDecoration: 'none',
            }}
          >
            farm restaurant
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                flexGrow: 1,
                display: { xs: 'block', md: 'none' },
                
                
              }}
            >
        
                  
                  
                
                       
                       <MenuItem sx={{ my: 1, color: 'black', display: 'block' }} onClick={handleCloseNavMenu} >
                      <Link  textAlign="center" href='/deals'  ><a>Deals</a></Link>
                        </MenuItem>
                      <MenuItem sx={{ my: 1, color: 'black', display: 'block' }} onClick={handleCloseNavMenu} >
                       <Link  textAlign="center" href='/forone' ><a>FOR ONE</a></Link>
                       </MenuItem>
                       <MenuItem sx={{ my: 1, color: 'black', display: 'block' }} onClick={handleCloseNavMenu} >

                       <Link  textAlign="center" href='/forsharing' ><a>For Sharing</a></Link>
                       </MenuItem>
                       <MenuItem sx={{ my: 1, color: 'black', display: 'block' }} onClick={handleCloseNavMenu} >
                       <Link  textAlign="center" href='/desserts' ><a>DESSERTS</a></Link>
                       </MenuItem>
                       <MenuItem sx={{ my: 1, color: 'black', display: 'block' }} onClick={handleCloseNavMenu} >
                       <Link  textAlign="center" href='/shoppingcard' ><a>SHOPPINGCARD</a></Link>
                       </MenuItem>
                   
                   
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ffee0a',
              textDecoration: 'none',
            }}
          >
            farm restaurant
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    
                    <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleCloseNavMenu} >
                      <Link  textAlign="center" href='/deals'  ><a>Deals</a></Link>
                        </Button>
                      <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleCloseNavMenu} >
                       <Link  textAlign="center" href='/forone' ><a>FOR ONE</a></Link>
                       </Button>
                       <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleCloseNavMenu} >

                       <Link  textAlign="center" href='/forsharing' ><a>For Sharing</a></Link>
                       </Button>
                       <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleCloseNavMenu} >
                       <Link  textAlign="center" href='/desserts' ><a>DESSERTS</a></Link>
                       </Button>
                       <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleCloseNavMenu} >
                       <Link  textAlign="center" href='/shoppingcard' ><a>SHOPPINGCARD</a></Link>
                       </Button>
          </Box>

          <Box
          //  sx={{marginRight:'40px'}}
           >
            <ButtonGroup
                 id="fade-button"
                 aria-controls={open ? 'fade-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}
                 sx={{marginRight:'40px'}}
            >
          
              <ShoppingBasketIcon sx={{color:'white'}} />
            
            </ButtonGroup>
           
                  <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              sx={{
                maxHeight:'300px',
                marginTop:'12px'
              }}
            >
              {
                orders.map((e,id) => {
                  return(
                    // <MenuItem key={id} onClick={handleClose}>{e.label}</MenuItem>
                    <Box key={id}>
                    <Card sx={{ display: 'flex' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          {e.label}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ width:'348px' }}>
                          {e.info}
                        </Typography>
                        <Typography component="div" variant="h5">
                          Count: {e.count}
                        </Typography>
                        <Button size="large"  color="error"   variant="contained" onClick={() => handeldelete(e.label)}  >
                                Delete
                            </Button>
                      </CardContent>
                      {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {e.count}
                        </IconButton>
                        <IconButton aria-label="play/pause">

                        </IconButton>
                        <IconButton aria-label="next">

                        </IconButton>
                      </Box> */}
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ maxWidth: 151 }}
                      image={e.imgPath}
                      alt="Live from space album cover"
                    />
                    
                  </Card>
                  <Divider />
                  </Box>
                  )
                 })
              }

            

            </Menu>
              
    </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
           
            


            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

        
     

      </Container>
      

    </AppBar>

    
    <AppBar position="fixed"    sx={{
          
          backgroundColor:'rgb(45, 56, 67)',
          marginTop:'55px'
        }}
        
        >
      <Container
      
       maxWidth="xl"
       
        >
      <Tooltip title="Add" 
      
      >
        <Button sx={{color:'white'}}>Grow</Button>
      </Tooltip>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="Add"
      >
        <Button sx={{color:'white'}} >Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button sx={{color:'white'}}>Zoom</Button>
      </Tooltip>
      </Container>
    </AppBar>
    </main>
  
  );
};

// export default ResponsiveAppBar