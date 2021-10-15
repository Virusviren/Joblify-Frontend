import { Grid } from '@mui/material';
import React from 'react';

import Logo from '../../../static/icons/Logo.svg';
import SideMenu from './SideMenu';

const PersonalInfo = () => {
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
      <Grid item xl={10} lg={10}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          eligendi, vero earum, nesciunt repellat magnam hic delectus amet
          voluptatibus corrupti maxime aspernatur inventore exercitationem ab
          error dicta ex! Aliquam, neque.
        </p>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
