import type { NextPage } from 'next'


import {
  Box,

}from '@mui/material'


import Sliders from '../components/Sliders'





import Intro from '../components/intro'

import BasicTabs from '../components/tabs'
import { useEffect } from 'react'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
import RateSection from '../components/rateSetion'


const Home: NextPage = () => {




 



useEffect(()=> {

}) 
  return (
    <Box 
    >
        
      <Sliders />

      <Box  sx={{marginLeft:'20px',marginTop:'0px'}}>
      <RateSection />
      </Box>

      <Box  sx={{marginLeft:'20px',marginTop:'0px'}}>
        <Intro />
      </Box>
      {/* <Box className='box-list' sx={{marginLeft:'0px',marginTop:'100px', }}> */}
          <BasicTabs />
      {/* </Box> */}
 
      <Box  sx={{marginLeft:'20px',marginTop:'0px'}}>
      </Box>
    

    </Box>
  )
}

export default Home
