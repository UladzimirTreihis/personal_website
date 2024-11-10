import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import CardContainer from '../shared/CardContainer';
import BaseImage from '../shared/BaseImage';
import Slider from 'react-slick';

// Styled component for the image with hover effect
const ProjectImageWrapper = styled(Box)({
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    '&:hover .overlay-text': {
      opacity: 1,
    },
  });
  
  const ProjectImage = styled(BaseImage)({
    transition: 'filter 0.3s ease',
    '&:hover': {
      filter: 'brightness(0.4)',
    },
    height: "200px"
  });
  
  // Overlay text for "Check it out" on hover
  const OverlayText = styled(Typography)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 1, // Ensures overlay is on top of the image
    pointerEvents: 'none',
  });
  
  const Project = ({ data }) => {
    const { name, description, images, url, stack, gitUrl } = data;
  
    // Slider settings
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
      <CardContainer elevation={3}>
        <Box mb={2} display="flex" alignItems="center">
          <Link href={url} target="_blank" underline="hover" variant="h5" color="primary">
            {name}
          </Link>
        </Box>
        <Box mb={2} display="flex" alignItems="center">
            <Link href={gitUrl} target="_blank" visibility={gitUrl ? "visible" : "hidden"} underline="hover" sx={{ marginLeft: 2 }}>
                [source code]
            </Link>
        </Box>
  
        {/* Image or Image Carousel */}
        <Box position="relative">
          {images.length > 1 ? (
            <Slider {...settings}>
              {images.map((image, index) => (
                <ProjectImageWrapper key={index} onClick={() => window.open(url, '_blank')}>
                  <ProjectImage src={image} alt={`${name} - ${index + 1}`} />
                  <OverlayText className="overlay-text">{description}</OverlayText>
                </ProjectImageWrapper>
              ))}
            </Slider>
          ) : (
            <ProjectImageWrapper onClick={() => window.open(url, '_blank')}>
              <ProjectImage src={images[0]} alt={`${name} - 1`} />
              <OverlayText className="overlay-text">{description}</OverlayText>
            </ProjectImageWrapper>
          )}
        </Box>
  
        {/* Description Dropdown */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{description}</Typography>
          </AccordionDetails>
        </Accordion>
  
        {/* Stack Dropdown */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Stack</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              {stack.map((tech, index) => (
                <Typography variant="body2" key={index} sx={{ marginBottom: 0.5 }}>
                  {tech}
                </Typography>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </CardContainer>
    );
  };
  
  export default Project;   