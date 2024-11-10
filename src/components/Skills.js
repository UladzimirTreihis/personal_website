import React from 'react';
import { Box, Typography, Grid, Rating, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

// Styled container for each skill section
const SkillSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

// Skill item container with hover effect
const SkillItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: theme.spacing(1),
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: "#f2f2f2",
  },
}));

const Skills = ({ skills }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Programming Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {skills.pLanguages.map((lang, index) => (
              <Grid item xs={12} sm={6} md={12} key={index}>
                <SkillItem>
                  <Typography variant="body1">{lang.pLanguageName}</Typography>
                  <Rating
                    name={lang.pLanguageName}
                    value={parseFloat(lang.level)}
                    readOnly
                    precision={0.5}
                  />
                </SkillItem>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {skills.tools.map((tool, index) => (
              <Grid item xs={12} sm={6} md={12} key={index}>
                <SkillItem>
                  <Typography variant="body1">{tool.toolName}</Typography>
                  <Rating
                    name={tool.toolName}
                    value={parseFloat(tool.level)}
                    readOnly
                    precision={0.5}
                  />
                </SkillItem>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {skills.languages.map((lang, index) => (
              <Grid item xs={12} sm={6} md={12} key={index}>
                <SkillItem>
                  <Typography variant="body1">{lang.language}</Typography>
                  <Rating
                    name={lang.language}
                    value={parseFloat(lang.level)}
                    readOnly
                    precision={0.5}
                  />
                </SkillItem>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Skills;
