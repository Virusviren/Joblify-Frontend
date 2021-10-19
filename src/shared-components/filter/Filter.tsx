import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import { Checkbox, Grid } from '@mui/material';
import './Filter.css';
import { filterType } from '../../typings/filters';
import { IJobs } from '../../typings/jobs';

interface FilterComponentProps {
  filterName?: string;
  filterOptions?: filterType;
  data?: [IJobs];
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter = ({
  filterName,
  filterOptions,
  data,
  filters,
  setFilters,
}: FilterComponentProps) => {
  const [items, setItems] = useState<IJobs[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

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
              <Checkbox
                sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  // setIsChecked(event.target.checked);
                  event.target.checked
                    ? setFilters([...filters, option.name])
                    : setFilters([
                        ...filters.filter((item) => item !== option.name),
                      ]);
                }}
              />
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
                {filterName === 'Type of Job'
                  ? items.filter((job: IJobs) => job.type === option.name)
                      .length
                  : filterName === 'Seniority Levels'
                  ? items.filter(
                      (job: IJobs) => job.seniorityLevel === option.name
                    ).length
                  : items.filter((job: IJobs) => job.salary === option.name)
                      .length}
              </p>
            </Grid>
          </Grid>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Filter;
