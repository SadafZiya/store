import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRating from '../../StarRating/StarRating';
import CategoryFilter from '../Categoryfilter/CategoryFilter';

export default function SimpleAccordion() {
  const ProductCategory = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
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
          <CategoryFilter items={ProductCategory} />
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
            <StarRating rate={4} />
            <StarRating rate={3} />

            <StarRating rate={2} />

            <StarRating rate={1} />
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
