import React from 'react';
import { Box, Container } from '@mui/material';
import School from './School';

// Main Education component
const Education = ({ schools }) => {
    console.log(schools)
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        {schools.map((school, index) => (
          <Box key={index} mb={4}>
            <School data={school} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Education;
