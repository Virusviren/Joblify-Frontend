import React, { useState, useEffect } from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
  Autocomplete,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/endpoints';
import { Icandidateinfo } from '../../../../typings/candidate';
import { skillsList } from '../../../../static/data/skillsList';
interface ChipData {
  label: string;
}
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

interface IPROPS {
  getUserMutation: any;
  candidateInfo: Icandidateinfo;
}

const SkillsSection = ({ getUserMutation, candidateInfo }: IPROPS) => {
  const [edit, setEdit] = useState(false);
  const [skills, setSkills] = useState<any>(candidateInfo.skills);
  const [skill, setSkill] = useState('');
  const token = localStorage.getItem('token')!;

  useEffect(() => {
    console.log(skills);
  }, [skills]);

  const editSkills = async () => {
    try {
      await axios.patch(
        `${BASE_URL}candidate/profile/edit-skills`,
        {
          skills: skills,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      await getUserMutation.mutate(token);
    } catch (error) {
      console.log(error);
    }
  };

  // const [chipData, setChipData] = useState(skills);
  // const handleDelete = (chipToDelete: ChipData) => () => {
  //   setChipData((chips) => chips?.filter((chip) => chip !== chipToDelete));
  // };
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
        <Grid item xl={edit ? 9 : 11} lg={edit ? 8 : 10}>
          <h3>Skills</h3>
        </Grid>
        <Grid item xl={edit ? 3 : 1} lg={edit ? 4 : 2} textAlign='end'>
          {!edit && (
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </Button>
          )}
          {edit && (
            <Button
              variant='contained'
              color='success'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 2.5rem',
                textTransform: 'capitalize',
                marginRight: '1rem',
              }}
              onClick={() => {
                setEdit(false);
                editSkills();
              }}
            >
              Save
            </Button>
          )}
          {edit && (
            <Button
              variant='contained'
              color='error'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 2.5rem',
                textTransform: 'capitalize',
              }}
              onClick={() => {
                setEdit(false);
              }}
            >
              Cancel
            </Button>
          )}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>
      <Grid container padding={3} gap={8} alignItems='center'>
        {edit ? (
          <Autocomplete
            multiple
            fullWidth
            includeInputInList
            id='tags-standard'
            options={skillsList}
            getOptionLabel={(option) => option}
            // inputValue={skill}
            // onInputChange={(e, newValue) => {
            //   setSkill(newValue);
            // }}
            value={skills}
            onChange={(e, v) => {
              setSkills([...v]);
            }}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                // sx={{ width: '100%' }}
                variant='standard'
                // label='Skills'
                placeholder='Add Skills'
              />
            )}
          />
        ) : (
          <div>
            {candidateInfo.skills?.map((data) => {
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
        )}
      </Grid>
    </div>
  );
};

export default SkillsSection;
