import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Select, FormControl, MenuItem } from '@mui/material';
import deleteIcon from '../../../static/icons/delete.svg';
import addIcon from '../../../static/icons/addIcon.svg';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { IJobs } from '../../../typings/jobs';
import { useAppSelector } from '../../../app/hooks';
import Badge, { BadgeProps } from '@mui/material/Badge';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { countries } from '../../../static/data/countries';
import moment from 'moment';
import { ModeCommentOutlined } from '@mui/icons-material';
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '1rem 1rem',
    borderRadius: '50%',
    width: '2rem',
    height: '2rem',
  },
}));
interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
  activeJobItem: IJobs;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Input = styled('input')({
  display: 'none',
});

const ApplicationForm = ({ open, setOpen, activeJobItem }: IPROPS) => {
  // States
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [citizenship, setCitizenship] = useState('');
  const [email, setEmail] = useState('');
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    surname: '',
    address: '',
    mobileNumber: '',
  });
  // State for education
  const [educationDateFrom, setEducationDateFrom] = useState<
    Date | null | string
  >(null);
  const [educationDateTo, setEducationDateTo] = useState<Date | null | string>(
    null
  );
  const [education, setEducation] = useState({
    level: '',
    universityName: '',
    startingDate: 'iv',
    endingDate: 'id',
  });
  const [allEducation, setAllEducation] = useState([
    { level: '', universityName: '', startingDate: '', endingDate: '' },
  ]);

  // State for WorkExperience

  const [workExperience, setWorkExperience] = useState([
    {
      companyName: '',
      position: '',
      startingDate: '',
      endingDate: '',
      description: '',
    },
  ]);
  // Functions
  const handleChangePersonalInfo: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };
  const handleChangeEducation: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };
  const addEducationItem = () => {
    setAllEducation([...allEducation, education]);
    console.log(allEducation);

    // setEducation({
    //   level: '',
    //   universityName: '',
    //   startingDate: '',
    //   endingDate: '',
    // });
  };
  // Handle Submit
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const personalDataToSubmit = {
      ...personalInfo,
      email: email,
      citizenship: citizenship,
      dateOfBirth: moment(dateOfBirth).format('DD-MM-YYYY'),
    };

    console.log(personalDataToSubmit);
  };

  return (
    <Dialog
      open={open}
      disableEscapeKeyDown={true}
      maxWidth='lg'
      BackdropProps={{
        style: {
          backdropFilter: 'blur(15px)',
          background: 'rgba(196, 196, 196, 0.5)',
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle style={{ padding: '1.5rem 3rem' }}>
          <Grid container justifyContent='space-between'>
            <Grid item>
              <h4>
                Your Application for{' '}
                <span style={{ color: '#686868' }}>
                  {activeJobItem.jobTitle}
                </span>
              </h4>
            </Grid>
            <Grid item>
              <img
                src={deleteIcon}
                alt='close img'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setOpen(false);
                }}
              />
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent style={{ padding: '1.5rem 3rem' }}>
          <p
            style={{
              fontWeight: 'bold',
              marginBottom: '2rem',
              fontSize: 'large',
            }}
          >
            Personal Information
          </p>
          <Grid container style={{ marginBottom: '3.5rem' }} gap={5}>
            <Grid item xl={5} lg={5}>
              <Grid container>
                <Grid item xl={6} lg={6}>
                  <p className='input-title'>First name</p>
                  <input
                    className='submit-application-input'
                    type='text'
                    required
                    name='name'
                    value={personalInfo.name}
                    onChange={handleChangePersonalInfo}
                  />
                </Grid>
                <Grid item xl={6} lg={6}>
                  <p className='input-title'>Last name</p>
                  <input
                    className='submit-application-input'
                    type='text'
                    required
                    name='surname'
                    value={personalInfo.surname}
                    onChange={handleChangePersonalInfo}
                  />
                </Grid>
                <Grid item xl={12} lg={12} paddingTop={4}>
                  <p className='input-title'>Address</p>
                  <input
                    className='submit-application-input'
                    required
                    type='text'
                    style={{ width: '95%' }}
                    name='address'
                    value={personalInfo.address}
                    onChange={handleChangePersonalInfo}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={5} lg={4}>
              <Grid container>
                <Grid item xl={6} lg={6} paddingRight={2}>
                  <p className='input-title'>Date of Birth</p>
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DesktopDatePicker
                      inputFormat='DD/MM/yyyy'
                      value={dateOfBirth}
                      onChange={(newValue) => {
                        setDateOfBirth(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} name='dateOfBirth' />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xl={6} lg={6}>
                  <p className='input-title'>Citizenship</p>
                  <FormControl fullWidth>
                    <Select
                      name='citizenship'
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={citizenship}
                      onChange={(e) => {
                        setCitizenship(e.target.value);
                      }}
                    >
                      {countries.map((country) => {
                        return <MenuItem value={country}>{country}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xl={6} lg={6} paddingTop={2}>
                  <p className='input-title'>Mobile number</p>
                  <input
                    className='submit-application-input'
                    type='text'
                    required
                    name='mobileNumber'
                    value={personalInfo.mobileNumber}
                    onChange={handleChangePersonalInfo}
                  />
                </Grid>
                <Grid item xl={6} lg={6} paddingTop={2}>
                  <p className='input-title'>Email</p>
                  <input
                    className='submit-application-input'
                    type='email'
                    required
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <p
            style={{
              fontWeight: 'bold',
              marginBottom: '2rem',
              fontSize: 'large',
            }}
          >
            Education
          </p>
          <Grid
            container
            style={{ marginBottom: '3.5rem' }}
            alignItems={'center'}
            justifyContent='space-between'
          >
            <Grid item xl={10} lg={10}>
              <Grid container>
                <Grid item xl={3} lg={3}>
                  <p className='input-title'>Level of education</p>
                  <input
                    className='submit-application-input'
                    type='text'
                    name='level'
                    value={education.level}
                    onChange={handleChangeEducation}
                  />
                </Grid>
                <Grid item xl={3} lg={3}>
                  <p className='input-title'>School/University Name</p>
                  <input
                    className='submit-application-input'
                    type='text'
                    name='universityName'
                    value={education.universityName}
                    onChange={handleChangeEducation}
                  />
                </Grid>
                <Grid item xl={3} lg={3} paddingRight={1}>
                  <p className='input-title'>From</p>
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DesktopDatePicker
                      views={['year']}
                      inputFormat='YYYY'
                      value={education.startingDate}
                      onChange={(newValue) => {
                        setEducation({
                          ...education,
                          startingDate: moment(newValue).format('yyyy'),
                        });
                      }}
                      renderInput={(params) => (
                        <TextField {...params} name='dateOfBirth' />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xl={3} lg={3} paddingRight={1}>
                  <p className='input-title'>To</p>
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DesktopDatePicker
                      views={['year']}
                      inputFormat='YYYY'
                      value={education.endingDate}
                      onChange={(newValue) => {
                        setEducation({
                          ...education,
                          endingDate: moment(newValue).format('yyyy'),
                        });
                      }}
                      renderInput={(params) => (
                        <TextField {...params} name='dateOfBirth' />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              {/* Map of the educations */}

              {allEducation.length > 1 &&
                allEducation.slice(2, allEducation.length - 1).map((item) => (
                  <Grid container>
                    <Grid item xl={3} lg={3}>
                      <p className='input-title'>Level of education</p>
                      <p>{item.level}</p>
                    </Grid>
                    <Grid item xl={3} lg={3}>
                      <p className='input-title'>School/University Name</p>
                      <p>{item.universityName}</p>
                    </Grid>
                    <Grid item xl={3} lg={3}>
                      <p className='input-title'>From</p>
                      <p>{item.startingDate}</p>
                    </Grid>
                    <Grid item xl={3} lg={3}>
                      <p className='input-title'>To</p>
                      <p>{item.endingDate}</p>
                    </Grid>
                  </Grid>
                ))}

              {/* Finsh here */}
            </Grid>
            <Grid item xl={2} lg={2}>
              <img
                src={addIcon}
                alt='Add icon'
                onClick={addEducationItem}
                style={{ cursor: 'pointer' }}
              />
            </Grid>
          </Grid>

          <p
            style={{
              fontWeight: 'bold',
              marginBottom: '2rem',
              fontSize: 'large',
            }}
          >
            Work Experience
          </p>
          <Grid
            container
            style={{ marginBottom: '3.5rem' }}
            alignItems='center'
            justifyContent='space-between'
          >
            <Grid item xl={10} lg={10}>
              <Grid container>
                <Grid item xl={3} lg={3}>
                  <p className='input-title'>Company Name</p>
                  <input className='submit-application-input' type='text' />
                </Grid>
                <Grid item xl={3} lg={3}>
                  <p className='input-title'>Position</p>
                  <input className='submit-application-input' type='text' />
                </Grid>
                <Grid item xl={3} lg={3}>
                  <p className='input-title'>From</p>
                  <input className='submit-application-input' type='text' />
                </Grid>
                <Grid item xl={3} lg={3}>
                  <p className='input-title'>To</p>
                  <input className='submit-application-input' type='text' />
                </Grid>
                <Grid item xl={12} lg={12} paddingTop={4}>
                  <p className='input-title'>Description</p>
                  <input className='submit-application-input' type='text' />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={2} lg={2}>
              <img src={addIcon} alt='Add icon' />
            </Grid>
          </Grid>

          <p
            style={{
              fontWeight: 'bold',
              marginBottom: '2rem',
              fontSize: 'large',
            }}
          >
            Skills
          </p>
          <Grid container style={{ marginBottom: '3.5rem' }}>
            <p className='input-title' style={{ marginBottom: '1rem' }}>
              Add Skills
            </p>
            <input
              className='submit-application-input'
              type='text'
              style={{ width: '100%' }}
            />
          </Grid>

          <p
            style={{
              fontWeight: 'bold',
              marginBottom: '2rem',
              fontSize: 'large',
            }}
          >
            Attachments
          </p>
          <Grid container gap={3}>
            <Grid item>
              <label htmlFor='contained-button-file1'>
                <Input
                  id='contained-button-file1'
                  multiple
                  type='file'
                  accept='application/pdf'
                />
                <Button
                  component='span'
                  variant='contained'
                  color='primary'
                  style={{
                    borderRadius: '10px',
                    padding: '0.5rem 3rem',
                    textTransform: 'capitalize',

                    margin: '2rem 0 2rem auto',
                  }}
                >
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',

                  margin: '2rem 0 2rem auto',
                }}
              >
                Upload CV
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',

                  margin: '2rem 0 2rem auto',
                }}
              >
                Upload Information Video
              </Button>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions style={{ padding: '1.5rem 3rem' }}>
          <Grid container alignItems='center' justifyContent='space-around'>
            <Grid item lg={'auto'}>
              <Checkbox {...label} color='primary' />
            </Grid>
            <Grid item lg={6}>
              {' '}
              <p style={{ marginRight: '1.5rem' }}>
                You agree to process your data
              </p>
            </Grid>
            <Grid item lg={2}>
              <Button
                onClick={() => setOpen(false)}
                variant='contained'
                color='secondary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item lg={2}>
              {' '}
              <Button
                // onClick={() => setOpen(false)}
                type='submit'
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ApplicationForm;
