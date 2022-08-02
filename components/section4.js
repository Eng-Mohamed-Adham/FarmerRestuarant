import { Grid,
    Stack,
    Typography,
    ImageList,
    ImageListItem
 } from "@mui/material";
 import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




  export function Section4(){
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return(
        <Grid
        container 
        
        rowSpacing='1'
        columnSpacing='xs:1,sm:2,md:3'
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{backgroundColor:'rgba(0, 0, 0, 0.87)',height:'400px',marginTop:'0px'}}

        >
            <Grid container spacing='2' direction='column' >
            <Accordion expanded={expanded === 'panel1'} sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}} onChange={handleChange('panel1')} >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}}
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    General settings
                </Typography>
                <Typography sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}}>I am an accordion</Typography>
                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>


                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}}
                >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}} />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                            <Typography sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}}>
                                You are currently not an owner
                            </Typography>
                            </AccordionSummary>
                        <AccordionDetails>
                                <Typography>
                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                    laoreet.
                                </Typography>
                        </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}} onChange={handleChange('panel3')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}} />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    Advanced settings
                                </Typography>
                                <Typography sx={{backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff'}}>
                                    Filtering has been entirely disabled for whole web server
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                </Accordion>

                

            </Grid>
          

           
        
             
           

        </Grid>
    )
}

// export default Section4