import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect } from 'react';
import { Checkbox, Grid } from '@mui/material';
import './Filter.css';
import { filterType } from '../../typings/filters';
interface FilterComponentProps {
  filterName?: string;
  filterOptions?: filterType;
}

const Filter = ({ filterName, filterOptions }: FilterComponentProps) => {
  useEffect(() => {
    console.log('Upadated');
  }, []);
  return (
    <Accordion className='filter'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <p style={{ fontWeight: 'bolder', fontSize: 'large' }}>{filterName}</p>
      </AccordionSummary>
      <AccordionDetails>
        {filterOptions?.map((option, index) => (
          <Grid container alignItems='center'>
            <Grid item lg={3}>
              <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />
            </Grid>
            <Grid item lg={7}>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: 'medium',
                  color: 'black',
                }}
              >
                {option.name}
              </p>
            </Grid>
            <Grid item lg={2} textAlign='center'>
              <p className='filter-item-count-unchecked'>
                {option.numberOfOptions}
              </p>
            </Grid>
          </Grid>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Filter;
