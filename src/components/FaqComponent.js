import React from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ArrowIcon from '../assets/icon-arrow-down.svg'

const FaqComponent = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Grid container
                sx={{
                    width: 700,
                    height: 400,
                    p: 2,
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                }}
            >
                <Grid xs={6}>
                    <Typography>FAQ</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography fontSize="25px" fontWeight="900" color="#1d1e35" mt="30px">FAQ</Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>

        </Box>
    )
}

export default FaqComponent