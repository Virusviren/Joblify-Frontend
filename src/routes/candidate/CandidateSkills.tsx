import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

interface ChipData {
  key: number;
  label: string;
}
interface IPROPS {
  skills?: string[];
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const CandidateSkills = ({ skills }: IPROPS) => {
  return (
    <div>
      {skills?.map((data) => {
        return (
          <Chip
            label={data}
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

export default CandidateSkills;
