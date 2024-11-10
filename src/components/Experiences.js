import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Experience from './Experience';

// Main Education component
const Experiences = ({ experiences }) => {

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        {experiences.map((experience, index) => (
          <Box key={index} mb={4}>
            <Experience data={experience} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Experiences;
