import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRating from '../../StarRating/StarRating';
import CategoryFilter from '../Categoryfilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import { typography } from '@mui/system';

export default function SimpleAccordion() {
  const ProductCategory = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  const ProductPriceFilter = [
    'Any Price',
    'Under $25',
    '$25 to $50',
    '$50 to $100',
    '$100 to $200',
    '$200 & Above',
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
          <StarRating rate={4} />
          <StarRating rate={3} />
          <StarRating rate={2} />
          <StarRating rate={1} />
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
          <PriceFilter items={ProductPriceFilter} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
