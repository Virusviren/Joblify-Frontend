import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Divider } from '@mui/material';
import deleteIcon from '../../static/icons/delete.svg';
import addIcon from '../../static/icons/addIcon.svg';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Me from '../../static/icons/viren.jpg';
import CandidateSkills from './CandidateSkills';
interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
}

const Input = styled('input')({
  display: 'none',
});
const CandidateViewApplication = ({ open, setOpen }: IPROPS) => {
  return (
    <Dialog
      open={open}
      disableEscapeKeyDown={true}
      maxWidth='xl'
      BackdropProps={{
        style: {
          backdropFilter: 'blur(15px)',
          background: 'rgba(196, 196, 196, 0.5)',
        },
      }}
    >
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <h4>
              Application for{' '}
              <span style={{ color: '#686868' }}>
                Senior Frontend Developer
              </span>
            </h4>
          </Grid>
          <Grid item style={{ marginLeft: '20rem' }}>
            <h4>
              Application No.
              <span style={{ color: '#686868' }}> #12345678</span>
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
      <Divider />
      <DialogContent style={{ padding: '1.5rem 0rem ', overflowX: 'hidden' }}>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            fontSize: 'large',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <span
            style={{
              borderBottom: '4px solid #686868',
              paddingBottom: '0.5rem',
            }}
          >
            Personal Information
          </span>
        </p>
        <Grid
          container
          style={{
            marginBottom: '2rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
          gap={5}
        >
          <Grid item textAlign='center' xl={'auto'} lg={'auto'}>
            <img
              src={Me}
              alt='avatar'
              style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: '#c4c4c4',
              }}
            />

            <p className='input-title' style={{ padding: '1rem 0' }}>
              Photo
            </p>
          </Grid>
          <Grid item xl={5} lg={5}>
            <Grid container>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>First name</p>
                <h3 style={{ marginTop: '1rem' }}>Viren</h3>
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Last name</p>
                <h3 style={{ marginTop: '1rem' }}>Patil</h3>
              </Grid>
              <Grid item xl={12} lg={12} paddingTop={4}>
                <p className='input-title'>Address</p>
                <h3 style={{ marginTop: '1rem' }}>Lublin Poland</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={4} lg={4}>
            <Grid container>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Date of Birth</p>
                <h3 style={{ marginTop: '1rem' }}>19/10/1997</h3>
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Citizenship</p>
                <h3 style={{ marginTop: '1rem' }}>India</h3>
              </Grid>
              <Grid item xl={6} lg={6} paddingTop={4}>
                <p className='input-title'>Mobile number</p>
                <h3 style={{ marginTop: '1rem' }}>+48579209416</h3>
              </Grid>
              <Grid item xl={6} lg={6} paddingTop={4}>
                <p className='input-title'>Email</p>
                <h3 style={{ marginTop: '1rem' }}>virenpatil1@outlook.com</h3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: '2rem' }} />
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            fontSize: 'large',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <span
            style={{
              borderBottom: '4px solid #686868',
              paddingBottom: '0.5rem',
            }}
          >
            Education
          </span>
        </p>
        <Grid
          container
          style={{
            marginBottom: '3.5rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
          alignItems={'center'}
          justifyContent='space-between'
        >
          <Grid item xl={10} lg={10}>
            <Grid container>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>Level of education</p>
                <h3 style={{ marginTop: '1rem' }}>Phd</h3>
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>School/University Name</p>
                <h3 style={{ marginTop: '1rem' }}>Wsei</h3>
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>From</p>
                <h3 style={{ marginTop: '1rem' }}>October 2018</h3>
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>To</p>
                <h3 style={{ marginTop: '1rem' }}>October 2020</h3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: '2rem' }} />
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            fontSize: 'large',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <span
            style={{
              borderBottom: '4px solid #686868',
              paddingBottom: '0.5rem',
            }}
          >
            Work Experience
          </span>
        </p>
        <Grid
          container
          style={{
            marginBottom: '3.5rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid item xl={10} lg={10}>
            <Grid container>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>Company Name</p>
                <h3 style={{ marginTop: '1rem' }}>Google</h3>
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>Position</p>
                <h3 style={{ marginTop: '1rem' }}>Intern</h3>
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>From</p>
                <h3 style={{ marginTop: '1rem' }}>October 2020</h3>
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>To</p>
                <h3 style={{ marginTop: '1rem' }}>October 2021</h3>
              </Grid>
              <Grid item xl={12} lg={12} paddingTop={4}>
                <p className='input-title'>Description</p>
                <h3 style={{ marginTop: '1rem' }}>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore perspiciatis rerum illo obcaecati impedit numquam
                  ratione expedita! Explicabo aliquam, quos nihil quod dolorum
                  unde. Porro recusandae provident veniam delectus
                  necessitatibus.{' '}
                </h3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: '2rem' }} />
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            fontSize: 'large',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <span
            style={{
              borderBottom: '4px solid #686868',
              paddingBottom: '0.5rem',
            }}
          >
            Skills
          </span>
        </p>
        <Grid
          container
          style={{
            marginBottom: '3.5rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <CandidateSkills />
        </Grid>

        <Divider style={{ marginBottom: '2rem' }} />
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            fontSize: 'large',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <span
            style={{
              borderBottom: '4px solid #686868',
              paddingBottom: '0.5rem',
            }}
          >
            Attachments
          </span>
        </p>
        <Grid
          container
          gap={3}
          style={{
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
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

                  margin: '0 0 2rem auto',
                }}
              >
                View Cover Letter
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

                margin: '0 0 2rem auto',
              }}
            >
              View CV
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

                margin: '0 0 2rem auto',
              }}
            >
              View Information Video
            </Button>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions style={{ padding: '1.5rem 3rem' }}>
        <Grid container alignItems='center' gap={6}>
          <Grid item>
            {' '}
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                cursor: 'default',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Current stage - 1st Round
            </Button>
          </Grid>

          <Grid item>
            {' '}
            <Button
              onClick={() => setOpen(false)}
              variant='contained'
              color='error'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Withdraw
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default CandidateViewApplication;
