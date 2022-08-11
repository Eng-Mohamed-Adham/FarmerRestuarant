import {
Grid,
Stack,
Typography,

}from '@mui/material'

import Link from 'next/link'

import '../styles/Home.module.css'

const pages = ['offers', 'oneperson', 'toparticipate','dishes','more'];

const data = ['who are we','Our history','Careers','Site Map']
const dataforAccount = ['myaccount','create a new account','Login']
const services = ['Customer Services','Connect with US','How do you reach US?','Frequently Asked Questions',]


 function  Footer2 (){
    return(
        <Grid
        container
        rowSpacing='4'
        columnSpacing='xs:2,sm:4,md:4'
        direction='row'
        justifyContent='center'
        alignItems='center'
        gap='60px'
        item xs={2} sm={3} md={4}
        spacing='3'
        my={4}
        sx={{
            marginTop:'50px',
            backgroundColor:'rgba(0, 0, 0, 0.87)',
            marginBottom:'0px'
        }}
        >
            <Grid>
                <nav className='nav'>
                    <ul sx={{listStyle:'none',color:'white'}} >
                        {pages.map(page => (
                            <li  key = {page} sx={{listStyle:'none',color:'white'}} >
                                <Link href={`/${page}`}>
                                    <a className='links'>{page}</a>
                                </Link>
                            </li>
                        ))}
                     
                       

                    </ul>
                </nav>
            </Grid>

            <Grid>
            <nav className='nav'>
                    <ul sx={{listStyle:'none',color:'white'}} >
                        {data.map(info => (
                            <li className='style'  key = {info} sx={{listStyle:'none',color:'white'}} >
                                <Link href={`/${info}`}>
                                    <a className='links'>{info}</a>
                                </Link>
                            </li>
                        ))}
                     
                       

                    </ul>
                </nav>
            </Grid>
           
            <Grid>
            <nav className='nav'>
                    <ul sx={{listStyle:'none',color:'white'}} >
                        {dataforAccount.map(data => (
                            <li  key = {data} sx={{listStyle:'none',color:'white'}} >
                                <Link href={`/${data}`}>
                                    <a className='links'>{data}</a>
                                </Link>
                            </li>
                        ))}
                     
                       

                    </ul>
                </nav>
            </Grid>
            {/* <nav className='nav'>
                    <ul sx={{listStyle:'none',color:'white'}} >
                        {services.map(data => (
                            <li  key = {data} sx={{listStyle:'none',color:'white'}} >
                                <Link href={`/${data}`}>
                                    <a className='links'>{data}</a>
                                </Link>
                            </li>
                        ))}
                     
                       

                    </ul>
                </nav>
            <Grid>
            </Grid> */}
        </Grid>
    )
}

export default Footer2