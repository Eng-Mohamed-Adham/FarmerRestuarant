import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Box,

}from '@mui/material'

import Slider from '../components/Slider'
import Sliders from '../components/Sliders'


const Home: NextPage = () => {
  return (
    <Box >
      
      <Sliders />

    </Box>
  )
}

export default Home
