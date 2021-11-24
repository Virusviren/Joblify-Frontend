import { Grid } from '@mui/material';
import React from 'react';

const Technologies = () => {
  return (
    <>
      <Grid
        container
        alignItems='center'
        textAlign='justify'
        marginLeft={6}
        marginRight={6}
        marginBottom={6}
      >
        <h2>Technologies Used</h2>
      </Grid>
      <Grid
        container
        alignItems='center'
        textAlign='justify'
        marginLeft={6}
        marginRight={6}
        marginBottom={6}
      >
        <h2>FrontEnd Stack: </h2>

        <h2 style={{ marginLeft: '1rem' }}>
          React, Redux, React-query, React-router, Axios, Typescript, Material
          Ui, Moment.js.
        </h2>
      </Grid>
      <Grid
        container
        alignItems='center'
        textAlign='justify'
        marginLeft={6}
        marginRight={6}
        marginBottom={6}
      >
        <h2>BackEnd Stack: </h2>

        <h2 style={{ marginLeft: '1rem' }}>
          Node.js, Express.js, Multer.js, AWS S3, JsonWebToken, MongoDb,
          Mongoose.js.
        </h2>
      </Grid>
      <Grid
        container
        alignItems='center'
        textAlign='justify'
        marginLeft={6}
        marginRight={6}
        marginBottom={6}
      >
        <h2>Github Frontend: </h2>

        <h2 style={{ marginLeft: '1rem' }}>
          <a
            href='https://github.com/Virusviren/Joblify-Frontend'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            https://github.com/Virusviren/Joblify-Frontend{' '}
          </a>
        </h2>
      </Grid>
      <Grid
        container
        alignItems='center'
        textAlign='justify'
        marginLeft={6}
        marginRight={6}
        marginBottom={6}
      >
        <h2>Github Backend: </h2>

        <h2 style={{ marginLeft: '1rem' }}>
          <a
            href='https://github.com/Virusviren/Joblify-Backend'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            https://github.com/Virusviren/Joblify-Backend{' '}
          </a>
        </h2>
      </Grid>
    </>
  );
};

export default Technologies;
