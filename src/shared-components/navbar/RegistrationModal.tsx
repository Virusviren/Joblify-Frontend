import React, { Dispatch, SetStateAction, useState } from 'react';
import deleteIcon from '../../static/icons/delete.svg';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';

import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../utils/endpoints';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginUser } from '../../features/Authentication/authSlice';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
interface IPROPS {
  RegisterModalOpen: boolean;
  setRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  toggleLoginAndRegistrationModal: Dispatch<SetStateAction<string>>;
}
interface RegisterUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const RegistrationModal = ({
  RegisterModalOpen,
  setRegisterModalOpen,
  toggleLoginAndRegistrationModal,
  setLoginModalOpen,
}: IPROPS) => {
  let history = useHistory();
  //functions
  const registerUser = async (formData: RegisterUser) => {
    const response = await axios.post(`${BASE_URL}signup`, formData);
    return response.data;
  };

  const dispatch = useAppDispatch();
  const mutation = useMutation(registerUser, {
    onSuccess: (data: any) => {
      localStorage.setItem('token', data.token);
      dispatch(loginUser(data));
      setRegisterModalOpen(false);
      const decoded = jwt_decode(data.token);
      const strDecoded = JSON.stringify(decoded);

      localStorage.setItem('userType', JSON.parse(strDecoded).userInfo.type);

      history.push(history.location.pathname);
    },
    onError: () => {
      console.log('noe');
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setRegisterData({
      name: '',
      surname: '',
      email: '',
      password: '',
    });
    setPassword2('');
    mutation.mutate(registerData);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  //States
  const [registerData, setRegisterData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });
  const [password2, setPassword2] = useState('');

  const { name, surname, email, password } = registerData;
  // Component render
  return (
    <Dialog
      open={RegisterModalOpen}
      disableEscapeKeyDown={true}
      maxWidth='md'
      BackdropProps={{
        style: {
          backdropFilter: 'blur(15px)',
          background: 'rgba(196, 196, 196, 0.5)',
        },
      }}
    >
      <Grid
        container
        justifyContent='flex-end'
        paddingRight={2}
        paddingTop={2}
        style={{ zIndex: 10 }}
      >
        <img
          src={deleteIcon}
          alt='close img'
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            setRegisterModalOpen(false);
          }}
        />
      </Grid>
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
        <Grid container justifyContent='space-between'>
          <Grid item lg={12} xl={12} textAlign='center'>
            <h3>Welcome to Joblify!</h3>
            <p style={{ fontSize: '14px' }}>
              Please enter your details to signup
            </p>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xl={6} lg={6}>
              <p
                style={{
                  fontWeight: 'bold',
                  paddingTop: '1rem',
                  marginBottom: '10px',
                }}
              >
                First Name
              </p>
              <input
                className='login-input'
                type='text'
                required
                value={name}
                onChange={onChange}
                name='name'
              />
            </Grid>
            <Grid item xl={6} lg={6}>
              {' '}
              <p
                style={{
                  fontWeight: 'bold',
                  paddingTop: '1rem',
                  marginBottom: '10px',
                }}
              >
                Last Name
              </p>
              <input
                className='login-input'
                type='text'
                value={surname}
                onChange={onChange}
                name='surname'
              />
            </Grid>
            <Grid item lg={12} xl={12}>
              <p
                style={{
                  fontWeight: 'bold',
                  paddingTop: '1rem',
                  marginBottom: '10px',
                }}
              >
                Email
              </p>
              <input
                className='login-input'
                style={{ width: '98%' }}
                type='text'
                required
                value={email}
                onChange={onChange}
                name='email'
              />
            </Grid>
            <Grid item xl={6} lg={6}>
              <p
                style={{
                  fontWeight: 'bold',
                  paddingTop: '1rem',
                  marginBottom: '10px',
                }}
              >
                Password
              </p>
              <input
                className='login-input'
                type='password'
                required
                value={password}
                onChange={onChange}
                name='password'
              />
            </Grid>
            <Grid item xl={6} lg={6}>
              {' '}
              <p
                style={{
                  fontWeight: 'bold',
                  paddingTop: '1rem',
                  marginBottom: '10px',
                }}
              >
                Confirm password
              </p>
              <input
                className='login-input'
                type='password'
                required
                value={password2}
                onChange={(event) => setPassword2(event.target.value)}
                name='password2'
              />
            </Grid>
            <Grid item marginTop={3}>
              <p>
                Already have an account?{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: '#4640de',
                  }}
                  onClick={() => {
                    setLoginModalOpen(true);
                    toggleLoginAndRegistrationModal('Login');
                    setRegisterModalOpen(false);
                  }}
                >
                  Login
                </span>
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            xl={12}
            lg={12}
            justifyContent='center'
            marginBottom={4}
          >
            <Grid item xl={12} lg={12} textAlign='center'>
              <Button
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                  marginBottom: '1rem',
                }}
                type='submit'
              >
                SignUp
              </Button>
            </Grid>
            <Grid item xl={12} lg={12} textAlign='center'>
              <p>
                By signing up you agree to the Terms & Conditions and the
                Privacy Policy requirments.
              </p>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
