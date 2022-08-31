import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CollapseAccordion from './CollapseAccordion';
import { ReactComponent as DekstopImage } from '../assets/illustration-woman-online-desktop.svg';
import { ReactComponent as DekstopPattern } from '../assets/bg-pattern-desktop.svg';
import { ReactComponent as MobilePicture } from '../assets/illustration-woman-online-mobile.svg';
import { ReactComponent as MobilePattern } from '../assets/bg-pattern-mobile.svg';




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
                    width: '700px',
                    p: 2,
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    overflow: 'visible'
                }}
            >
                <Grid xs={12} md={6}  >
                    <Box sx={{
                        position: "relative",
                        display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }
                    }}>

                        <DekstopPattern width={250} height={250} style={{ "position": "absolute" }} />
                        <DekstopImage width={320} height={359} style={{ "position": "relative" }} />
                    </Box>
                    <Box sx={{
                        position: "relative",
                        display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' },
                        overflow: "visible",
                        mb: "150px"

                    }}>


                        <MobilePicture width={320} height={150} style={{ "position": "absolute", }} />
                        <MobilePattern width={220} height={104} style={{ "position": "relative", }} />
                    </Box>


                </Grid>
                <Grid xs={12} md={6}>
                    <Typography fontSize="25px" fontWeight="900" color="#1d1e35" mt="30px">FAQ</Typography>

                    <CollapseAccordion />

                </Grid>

            </Grid>

        </Box>
    )
}

export default FaqComponent