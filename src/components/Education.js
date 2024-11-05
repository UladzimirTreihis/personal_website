import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import School from './School';

// Main Education component
const Education = ({ schools }) => {
    console.log(schools)
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Education
      </Typography>
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
