import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Stack } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


             const images = [
                {
                label: 'San Francisco – Oakland Bay Bridge, United States',
                imgPath:
                    'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=996',
                },
                {
                label: 'Bird',
                imgPath:
                    'https://img.freepik.com/free-photo/grilled-beef-steak-dark-wooden-surface_1150-44344.jpg?t=st=1655372658~exp=1655373258~hmac=6ca1d24819e82228c185ecfb91be5c4f9200da3a93c5fe9fbae4a60549b3f9d0&w=996',
                },
                {
                label: 'Bali, Indonesia',
                imgPath:
                    'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1655372658~exp=1655373258~hmac=83663dc7cac6afa5d9cf733cc743f45630cdda4f1cef20110118ba573f4542b8&w=996',
                },
                {
                label: 'Goč, Serbia',
                imgPath:
                    'https://img.freepik.com/free-photo/kebab-platter-with-lamb-chicken-lula-tikka-kebabs-grilled-vegetables-with-red-onion-salad_141793-2251.jpg?t=st=1655372658~exp=1655373258~hmac=22ac7ced20ebbd79b0c842c11f3606b2a2dbdef6bad9444f5e2fe4931910c41f&w=996',
                },
                {
                    label: 'gfdfg',
                    imgPath:
                        'https://img.freepik.com/free-photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-new-year-holiday_127425-162.jpg?w=1380',
                    },
                    {
                        label: 'GAHFJ',
                        imgPath:
                            'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?t=st=1655372658~exp=1655373258~hmac=529a02c3c974c8f545aff2f70f4c4d2c2310edb24169f0a4b5edfeb161f598e5&w=996',
                        },
                
            ];
            

          
        
            
            export  function Section1() {
              const theme = useTheme();
              const [activeStep, setActiveStep] = React.useState(0);
              const maxSteps = images.length;
            
              const handleNext = () => {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
              };
            
              const handleBack = () => {
                setActiveStep((prevActiveStep) => prevActiveStep - 1);
              };
            
              const handleStepChange = (step) => {
                setActiveStep(step);
              };
            
              return (
                <Box sx={{ width: 'wv', flexGrow: 1 }} marginTop='91px'>
                  {/* <Paper
                    square
                    elevation={0}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 50,
                      pl: 2,
                      bgcolor: 'background.default',
                    }}
                  >
                    <Typography>{images[activeStep].label}</Typography>
                  </Paper> */}
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents 
                    width='1200px'
                    
                  >
                    {images.map((step, index) => (
                      <div key={step.label} width='1200px'>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <Stack
                          
                            component="img"
                            sx={{
                              height: 500,
                              display: 'block',
                            //   maxWidth: 400,
                              overflow: 'hidden',
                              width:'100%'
                              
                            }}
                            width='wv'
                            src={step.imgPath}
                            alt={step.label}
                          />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  {/* <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >
                        Next
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  /> */}
                </Box>
              );
            }
            
            // export default Section1