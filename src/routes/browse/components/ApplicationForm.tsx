import React, { useState, useEffect, memo } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  Grid,
  Select,
  FormControl,
  MenuItem,
  Autocomplete,
} from '@mui/material';
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
import {
  Education as Ieducation,
  WorkExperience as IworkExperience,
} from '../../../typings/appliedJobsApplications';
import { skillsList } from '../../../static/data/skillsList';
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

  const [education, setEducation] = useState({
    level: '',
    universityName: '',
    startingDate: moment().format('yyyy'),
    endingDate: moment().format('yyyy'),
  });
  const [allEducation, setAllEducation] = useState<Ieducation[]>([]);

  // State for WorkExperience

  const [workExperience, setWorkExperience] = useState({
    companyName: '',
    position: '',
    startingDate: moment().format('yyyy'),
    endingDate: moment().format('yyyy'),
    description: '',
  });

  const [allWorkExperience, setAllWorkExperience] = useState<IworkExperience[]>(
    []
  );
  // State for Skills
  const [skills, setSkills] = useState<any>([]);
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

    setEducation({
      level: '',
      universityName: '',
      startingDate: moment().format('yyyy'),
      endingDate: moment().format('yyyy'),
    });
  };

  const handleChangWorkExperience: React.ChangeEventHandler<HTMLInputElement> =
    (e) => {
      setWorkExperience({ ...workExperience, [e.target.name]: e.target.value });
    };
  const addWorkExperienceItem = () => {
    console.log('hello');

    setAllWorkExperience([...allWorkExperience, workExperience]);
    setWorkExperience({
      companyName: '',
      position: '',
      startingDate: moment().format('yyyy'),
      endingDate: moment().format('yyyy'),
      description: '',
    });
  };
  // Function for handling Upload documents and video
  // let formData = new FormData();
  const [doc, setDoc] = useState<File>();

  const handelCvUpload = () => {
    // setOpen(true);
    console.log('changed');
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

    const educationDetails = addEducationItem;
    console.log(doc);
  };

  return (
    <Dialog
      open={open}
      disableEscapeKeyDown={true}
      maxWidth='lg'
      keepMounted
      disablePortal
      onClose={() => {
        setOpen(true);
      }}
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
            // alignItems={'center'}
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

              {allEducation.map((item) => (
                <Grid container marginTop={4}>
                  <Grid item xl={3} lg={3}>
                    <p className='input-title'>Level of education</p>
                    <h3>{item.level}</h3>
                  </Grid>
                  <Grid item xl={3} lg={3}>
                    <p className='input-title'>School/University Name</p>
                    <h3>{item.universityName}</h3>
                  </Grid>
                  <Grid item xl={3} lg={3}>
                    <p className='input-title'>From</p>
                    <h3>{item.startingDate}</h3>
                  </Grid>
                  <Grid item xl={3} lg={3}>
                    <p className='input-title'>To</p>
                    <h3>{item.endingDate}</h3>
                  </Grid>
                </Grid>
              ))}

              {/* Finsh here */}
            </Grid>
            <Grid item xl={2} lg={2} paddingLeft={2}>
              <img
                src={addIcon}
                alt='Add icon'
                onClick={() => {
                  addEducationItem();
                }}
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
            // alignItems='center'
            justifyContent='space-between'
          >
            <Grid item xl={10} lg={10}>
              <Grid container>
                <Grid item xl={3} lg={3}>
                  <p className='input-title'>Company Name</p>
                  <input
                    className='submit-application-input'
                    type='text'
                    name='companyName'
                    value={workExperience.companyName}
                    onChange={handleChangWorkExperience}
                  />
                </Grid>
                <Grid item xl={3} lg={3}>
                  <p className='input-title'>Position</p>
                  <input
                    className='submit-application-input'
                    type='text'
                    name='position'
                    value={workExperience.position}
                    onChange={handleChangWorkExperience}
                  />
                </Grid>
                <Grid xl={3} lg={3} paddingRight={1}>
                  <p className='input-title'>From</p>
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DesktopDatePicker
                      views={['year']}
                      inputFormat='YYYY'
                      value={workExperience.startingDate}
                      onChange={(newValue) => {
                        setWorkExperience({
                          ...workExperience,
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
                      value={workExperience.endingDate}
                      onChange={(newValue) => {
                        setWorkExperience({
                          ...workExperience,
                          endingDate: moment(newValue).format('yyyy'),
                        });
                      }}
                      renderInput={(params) => (
                        <TextField {...params} name='dateOfBirth' />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xl={12} lg={12} paddingTop={4}>
                  <p className='input-title'>Description</p>
                  <input
                    className='submit-application-input'
                    type='text'
                    name='description'
                    value={workExperience.description}
                    onChange={handleChangWorkExperience}
                  />
                </Grid>
              </Grid>
              {/* Map of workExperience */}
              {allWorkExperience.map((item) => (
                <Grid container marginTop={4}>
                  <Grid item xl={3} lg={3}>
                    <p className='input-title'>Company Name</p>
                    <h3>{item.companyName}</h3>
                  </Grid>
                  <Grid item xl={3} lg={3}>
                    <p className='input-title'>Position</p>
                    <h3>{item.position}</h3>
                  </Grid>
                  <Grid xl={3} lg={3} paddingRight={1}>
                    <p className='input-title'>From</p>
                    <h3>{item.startingDate}</h3>
                  </Grid>
                  <Grid item xl={3} lg={3} paddingRight={1}>
                    <p className='input-title'>To</p>
                    <h3>{item.endingDate}</h3>
                  </Grid>
                  <Grid item xl={12} lg={12} paddingTop={4}>
                    <p className='input-title'>Description</p>
                    <h3>{item.description}</h3>
                  </Grid>
                </Grid>
              ))}

              {/* End of workExperience */}
            </Grid>

            <Grid item xl={2} lg={2} paddingLeft={2}>
              <img
                src={addIcon}
                alt='Add icon'
                onClick={() => {
                  addWorkExperienceItem();
                }}
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
            Skills
          </p>
          <Grid container style={{ marginBottom: '3.5rem' }}>
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
              <label htmlFor='contained-button-cvUpload'>
                <Input
                  id='contained-button-cvUpload'
                  type='file'
                  accept='application/pdf'
                  onChange={(e) => {
                    console.log('file changed');
                  }}
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
                  Upload CV
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
                Upload Cover Letter
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
