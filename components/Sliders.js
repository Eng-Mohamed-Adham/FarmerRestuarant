import React, { useState, useEffect } from 'react'

import Link from 'next/link';

import data from '../data/dataOfSlider'


import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
Box,
Button,

}from '@mui/material'

function Sliders() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <Box className='section' >
      {/* <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div> */}
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              {/* <h4>{name}</h4> */}
              {/* <p className='title'>{title}</p> */}
              {/* <p className='text'>{quote}</p> */}
              
              {/* <ArrowBackIosNewIcon className='icon' /> */}
              <button className='prev' onClick={prevSlide}>
                  <NavigateBeforeIcon />
                </button>
                <button className='next' onClick={nextSlide}>
                  <NavigateNextIcon />
                </button>
            </article>
          )
        })}
        <Button className='but-center' ><Link href='/'><a>OnLine</a></Link></Button>
      </div>
     
       
    </Box>
  )
}

export default Sliders