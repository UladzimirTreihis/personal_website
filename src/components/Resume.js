import React from 'react'
import { Grid, Rating, Typography } from '@mui/material'
import Education from './Education'
import Experiences from './Experiences'
import Skills from './Skills'

const Resume = ({ resumeData }) => {


  return (
    <section id="resume" class='section'>
        <Grid container spacing={3}>
            <>  
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={3}>
                    <Typography mt={4} variant="h4" align="center" gutterBottom>
                        Education
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <div className="text-left">
                        <Education schools={resumeData.education}/>
                    </div>
                </Grid>
                <Grid item xs={0} md={2} />
            </>
            <>  
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={3}>
                    <Typography mt={4} variant="h4" align="center" gutterBottom>
                        Experience
                    </Typography>                
                </Grid>
                <Grid item xs={12} md={5}>
                <div className="text-left">
                    <Experiences experiences={resumeData.work} />
                </div>
                </Grid>
                <Grid item xs={0} md={2} />
            </>
            <>  
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={3}>
                    <Typography mt={4} variant="h4" align="center" gutterBottom>
                        Skills
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                <div className="text-left">
                    <Skills skills={resumeData.skills} />
                </div>
                </Grid>
                <Grid item xs={0} md={2} />
            </>
            
        </Grid>

 </section>
  )
}

export default Resume
