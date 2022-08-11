import type { NextPage } from 'next'

import {
  Box,

}from '@mui/material'


import Sliders from '../components/Sliders'

import { ResponsiveAppBar } from "../components/Menu"
import Footer from '../components/footer'
import Footer2 from '../components/footer2'


import TitleOfOffers from '../components/titleOfoffers'
import SlideOffers from '../components/slideOffers'

import TitleOfOnePerson from '../components/titleOfOnePerson'
import SlideForOne from '../components/slideForOne'

import TitleForSharing from '../components/titleForSharing'
import SlideForSharing from '../components/slideForSharing'

import Intro from '../components/intro'

import BasicTabs from '../components/tabs'
import { useEffect } from 'react'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>



const Home: NextPage = () => {




 



useEffect(()=> {

}) 
  return (
    <Box 
    >
       <ResponsiveAppBar />
        
      <Sliders />
      <Box  sx={{marginLeft:'20px',marginTop:'0px'}}>
        <Intro />
      </Box>
      <Box sx={{marginLeft:'20px',marginTop:'0px'}}>
          <BasicTabs />
      </Box>
 
      <Box  sx={{marginLeft:'20px',marginTop:'0px'}}>
      </Box>
    
      <Footer2 />
      <Footer />

    </Box>
  )
}

export default Home
