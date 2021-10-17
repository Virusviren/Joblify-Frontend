import React from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
interface ChipData {
  key: number;
  label: string;
}
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const SkillsSection = () => {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);
  return (
    <div
      style={{
        margin: '2rem 3rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 2px 10px 1px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Grid container alignItems='center' padding={3}>
        <Grid item xl={11} lg={10}>
          <h3>Skills</h3>
        </Grid>
        <Grid item xl={1} lg={2}>
          {' '}
          <Button
            variant='contained'
            color='primary'
            style={{
              borderRadius: '10px',
              padding: '0.5rem 3rem',
              textTransform: 'capitalize',
            }}
          >
            Edit
          </Button>{' '}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>
      <Grid container padding={3} gap={8}>
        <Grid container alignItems='center'>
          <div>
            {chipData.map((data) => {
              return (
                <Chip
                  label={data.label}
                  color='primary'
                  style={{
                    marginRight: '0.5rem ',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    padding: '0.5rem 0.25rem',
                  }}
                />
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillsSection;
