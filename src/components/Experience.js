import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem } from '@mui/material';
import CardContainer from '../shared/CardContainer';
import BaseImage from '../shared/BaseImage';
import Slider from 'react-slick';
import { styled } from '@mui/system'; 

// Styled component that inherits from Image
const ExperienceImage = styled(BaseImage)({});

// Styled component that inherits from CardContainer
const ExperienceContainer = styled(CardContainer)({});

const Experience = ({ data }) => {
  const { companyName, role, monthFrom, yearFrom, monthTo, yearTo, images, about, skills, achievements } = data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <ExperienceContainer elevation={3}>
      <Box>
        <Slider {...settings}>
          {images.map((image, index) => (
            <ExperienceImage key={index} src={image} alt={`${companyName} - ${index + 1}`} />
          ))}
        </Slider>
      </Box>
      <Box mb={2}>
        <Typography variant="h5">{companyName}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {role}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {`${monthFrom} ${yearFrom} - ${monthTo} ${yearTo}`}
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" paragraph>
        {about}
      </Typography>

      {/* Dropdown for Skills */}
      {skills && skills.length > 0 && (
      <Accordion>
        <AccordionSummary>
          <Typography>Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            {skills.map((skill, index) => (
              <ListItem key={index}>{skill}</ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      )}

      {/* Dropdown for Achievements */}
       {achievements && achievements.length > 0 && (         
      <Accordion>
        <AccordionSummary>
          <Typography>Achievements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>{achievement}</ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      )}
    </ExperienceContainer>
  );
};

export default Experience;
