import React, { useState } from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const CollapseAccordion = () => {
    const [expanded, setExpanded] = useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div>
            <Accordion

                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                sx={{
                    mb: '5px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#f47c57' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px"
                    >How many team members can I invite?</Typography>
                </AccordionSummary>
                <AccordionDetails
                >
                    <Typography fontSize="11px" textAlign="left">
                        You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                sx={{
                    '&:before': {
                        display: 'none',
                    },
                    mb: '0px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#f47c57' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px"
                    >What is the maximum file upload size?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize="11px">
                        No more than 2GB. All files in your account must fit your allotted storage space.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                sx={{
                    '&:before': {
                        display: 'none',
                    },
                    mb: '5px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#f47c57' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px"
                    >How do I reset my password?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize="11px">
                        Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                sx={{
                    '&:before': {
                        display: 'none',
                    },
                    mb: '5px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#f47c57' }} />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px"
                    >Can I cancel my subscription?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize="11px">
                        Yes! Send us a message and we'll process your request no questions asked.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
                sx={{
                    '&:before': {
                        display: 'none',
                    },
                    mb: '5px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#f47c57' }} />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px"
                    >Do you provide additional support?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize="11px">
                        Chat and email support is available 24/7. Phone lines are open during normal business hours.
                    </Typography>
                </AccordionDetails>

            </Accordion>

        </div>
    )
}
export default CollapseAccordion