import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CustomPagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        color='primary'
        style={{ margin: '1.5rem 0 1rem auto' }}
      />
    </Stack>
  );
};
export default CustomPagination;
