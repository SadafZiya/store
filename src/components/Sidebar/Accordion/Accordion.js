import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRating from '../StarRating/StarRating';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import { FilterContext } from '../../context/filter_context';
import CustomPriceFilter from '../PriceFilter/CustomPriceFilter/CustomPriceFilter';

export default function SimpleAccordion() {
  const { setFilterStar } = React.useContext(FilterContext);

  const clickHandler = (e) => {
    setFilterStar({ Star: e.target.id });
  };
  const ProductCategory = [
    'All',
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
          <div
            style={{
              margin: '0px 0px 15px 0px ',
              textDecoration: 'underLine',
              cursor: 'pointer',
            }}
          >
            <span
              id='clear'
              onClick={(e) => {
                clickHandler(e);
              }}
            >
              clear
            </span>
          </div>
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
          <CustomPriceFilter />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
