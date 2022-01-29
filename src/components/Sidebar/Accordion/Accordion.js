import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>jewelry</Typography>
          <Typography>electronics</Typography>
          <Typography>men's clothing</Typography>
          <Typography>women's clothing</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Customer Review</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            some text
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Filter by Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>some text</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
