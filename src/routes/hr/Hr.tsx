import { Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../static/icons/Logo.svg';
import SideMenu from './components/SideMenu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import candidatePic from '../../static/icons/viren.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import { hrFilter } from '../../static/data/options';

import './Hr.css';

import Filter from '../../shared-components/filter/Filter';
import Candidate from './components/Candidate';
import CustomPagination from '../../shared-components/pagination/CustomPagination';

const Hr = () => {
  return (
    <Grid container>
      <Grid
        item
        xl={2}
        lg={2}
        style={{
          boxShadow: '0px 4px 20px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src={Logo}
          alt='Logo'
          style={{ margin: '1rem auto 2rem', width: '10rem' }}
        />
        <SideMenu />
      </Grid>
      <Grid item xl={10} lg={10} style={{ backgroundColor: '#E5E5E5' }}>
        <Grid container alignItems='center' gap={2} padding={3}>
          <Grid item>
            {/* searchIcon */}
            <SearchIcon style={{ color: '#686868', fontSize: '2rem' }} />
          </Grid>
          <Grid item xl={8} lg={7}>
            {/* search input field */}
            <input
              type='text'
              placeholder='Search applications'
              style={{
                border: 'none',
                width: '50%',
                backgroundColor: '#e5e5e5',
                fontWeight: 'bold',
                fontSize: 'large',
                outline: 'none',
                padding: '0.5rem',
                color: '#686868',
              }}
            />
          </Grid>
          <Grid item>
            {/* Avatar img */}
            <img
              src={candidatePic}
              alt='viren'
              style={{ width: '3rem', borderRadius: '50%' }}
            />
          </Grid>
          <Grid item>
            {/* name and id */}
            <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Viren Patil
            </p>
            <p style={{ color: '#686868', fontWeight: 'bold' }}>#3727856243</p>
          </Grid>
          <Grid item xl={1} lg={1} textAlign='right'>
            {/* Logout button */}
            <LogoutIcon style={{ color: '#686868', fontSize: '2rem' }} />
          </Grid>
          <Grid item>
            {/* Logout */}
            <p style={{ color: '#686868', fontWeight: 'bold' }}>Logout</p>
          </Grid>
        </Grid>
        {/* For Applications and result tag */}
        <Grid container alignItems='center' gap={10} padding={3}>
          <Grid item>
            <h2>Applications</h2>
          </Grid>
          <Grid item>
            <p style={{ color: '#686868' }}>
              showing <span style={{ color: 'black' }}>50</span> results from
              4000 total
            </p>
          </Grid>
        </Grid>
        {/* For filter and results of the component */}
        <Grid
          container
          paddingLeft={3}
          paddingTop={2}
          paddingBottom={2}
          paddingRight={3}
        >
          <Grid item xl={3} lg={3} paddingRight={4}>
            <Grid container alignItems='center' gap={2} marginBottom={4}>
              <Grid item>
                <SettingsInputCompositeIcon />
              </Grid>
              <Grid item>
                <h3>Filters</h3>
              </Grid>
            </Grid>
            {/* <Filter
              filterName='Type of Applications'
              filterOptions={hrFilter}
            /> */}
          </Grid>
          <Grid
            item
            xl={9}
            lg={9}
            padding={3}
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: ' 0px 4px 20px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* DropDown menu */}
            <FormControl sx={{ width: '20%', marginBottom: '2.5rem' }}>
              <InputLabel id='demo-simple-select-label'>Sort by</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='SortBy'
                defaultValue={10}
                style={{ height: '2.2rem' }}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Newest</MenuItem>
                <MenuItem value={20}>Oldest</MenuItem>
              </Select>
            </FormControl>
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
            <CustomPagination />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hr;
