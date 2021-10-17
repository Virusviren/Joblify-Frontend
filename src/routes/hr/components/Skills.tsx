import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

interface ChipData {
  key: number;
  label: string;
}
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const Skills = () => {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);
  return (
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
  );
};

export default Skills;
