import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CollapseAccordion from './CollapseAccordion';
import { ReactComponent as DekstopImage } from '../assets/illustration-woman-online-desktop.svg';
import { ReactComponent as DekstopPattern } from '../assets/bg-pattern-desktop.svg';
import { ReactComponent as MobilePicture } from '../assets/illustration-woman-online-mobile.svg';
import { ReactComponent as MobilePattern } from '../assets/bg-pattern-mobile.svg';
import { ReactComponent as IllustrationBox } from '../assets/illustration-box-desktop.svg';




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

                    p: 2,
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    overflow: 'hidden'

                }}
            >
                <Grid xs={12} md={6}  >
                    <Box sx={{

                        display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
                        width: '150px',
                        justifyContent: "center"


                    }}>
                        <Box
                            className="illubox"
                            sx={{
                                position: "absolute",
                                ':hover': {

                                    mr: "20px"
                                }
                            }}
                        >
                            <IllustrationBox width={120} height={120} style={{ "position": "absolute", "zIndex": "3", "top": "110px", "right": "30px" }} />
                        </Box>
                        <Box
                            sx={{
                                position: "relative"
                            }}
                        >
                            <DekstopPattern width={550} height={550} style={{ "zIndex": "1", "position": "absolute", "right": "-170px", "top": "-160px" }} />
                            <DekstopImage width={320} height={359} style={{ "zIndex": "2", "position": "absolute", "right": "-170px", "top": "-40px" }} />
                        </Box>
                    </Box>
                    <Box sx={{

                        display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
                        overflow: "visible",
                        mb: "-20px",
                        justifyContent: "center"
                    }}>

                        <Box
                            sx={{
                                position: "absolute",
                                maxWidth: "300px",
                                justifyContent: "center"
                            }}
                        >
                            <MobilePicture width={220} height={180} style={{ "position": "absolute", "top": "-120px" }} />
                            <MobilePattern width={220} height={104} style={{ "position": "relative", "top": "-20px" }} />
                        </Box>
                    </Box>


                </Grid>
                <Grid xs={12} md={6}>
                    <Box
                        sx={{
                            display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' },
                        }}
                    >
                        <Typography fontSize="30px" fontWeight="1000" color="#1d1e35" mt="120px" mb="20px" textAlign="center">FAQ</Typography>
                        <Box
                            sx={{
                                maxWidth: "300px",
                                margin: "0 auto",

                            }}
                        >
                            <CollapseAccordion />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' },
                        }}
                    >
                        <Typography fontSize="27px" fontWeight="1000" color="#1d1e35" mt="20px" ml="15px">FAQ</Typography>
                        <Box
                            sx={{
                                maxWidth: "550px",
                                margin: "0 auto",
                                ":hover": {

                                    ".illubox": {
                                        mr: "20px"
                                    }
                                }
                            }}
                        >
                            <CollapseAccordion />
                        </Box>
                    </Box>

                </Grid>

            </Grid>

        </Box>
    )
}

export default FaqComponent