import React from 'react';
import { Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails, List, ListItem } from '@mui/material';
// import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import BaseImage from '../shared/BaseImage'
import CardContainer from '../shared/CardContainer'

// Styled component that inherits from the base Image
const SchoolImage = styled(BaseImage)({});

// Styled component that inherits from CardContainer
const SchoolContainer = styled(CardContainer)({});

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '300px', // Set a fixed height for the image carousel
  marginBottom: theme.spacing(2),
}));


const School = ({ data }) => {
  const {
    universityName,
    specialization,
    monthFrom,
    yearFrom,
    monthTo,
    yearTo,
    achievements,
    gpa,
    images,
    about,
    courses,
    clubs
  } = data;

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change image every 3 seconds
    arrows: false, // Disable navigation arrows for a cleaner look
  };

  return (
    <SchoolContainer elevation={3}>
      {/* Image Carousel */}
      <ImageContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <SchoolImage key={index} src={image} alt={`${universityName} - ${index + 1}`} />
          ))}
        </Slider>
      </ImageContainer>

      {/* Text Content */}
      <Box mb={2}>
        <Typography variant="h5" component="h2">
          {universityName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {`${monthFrom} ${yearFrom} - ${monthTo} ${yearTo}`}
        </Typography>
      </Box>
      <Typography variant="subtitle1" color="primary" gutterBottom>
        {specialization}
      </Typography>
      {gpa && (
        <Typography variant="body2" color="textSecondary">
          GPA: {gpa}
        </Typography>
      )}
      <Typography variant="body1" color="textPrimary" paragraph>
        {achievements}
      </Typography>
      {about && (
        <Typography variant="body2" color="textSecondary" mt={2} mb={2}>
          {about}
        </Typography>
      )}
      {/* Dropdown for Courses and Clubs */}
      <Accordion>
        <AccordionSummary>
          <Typography variant="body2" color="textSecondary">View Courses and Clubs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {courses && courses.length > 0 && (
              <Box mb={1}>
                <Typography variant="subtitle2">Courses:</Typography>
                <List dense>
                  {courses.map((course, index) => (
                    <ListItem key={index} style={{ padding: '2px 0' }}>
                      {course}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            {clubs && clubs.length > 0 && (
              <Box mt={1}>
                <Typography variant="subtitle2">Clubs:</Typography>
                <List dense>
                  {clubs.map((club, index) => (
                    <ListItem key={index} style={{ padding: '2px 0' }}>
                      {club}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Box>
        </AccordionDetails>
      </Accordion>
    </SchoolContainer>
  );
};

export default School;
