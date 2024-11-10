import React from 'react'
import { Avatar, Grid, Typography } from '@mui/material';


const About = ({ resumeData }) => {
  return (
    <section id="about" class='section'>
        <Grid container spacing={3}>
            <>  
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={3} display="flex">
                    <Avatar className="avatar"
                        src="images/profilepic.jpg" 
                        sx={{ width: 200, height: 200 }}
                        />
                </Grid>
                <Grid item xs={12} md={5}>
                    <div className='text-left'>
                        <Typography variant="h5" component="h2">
                            About Me
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        {
                            resumeData.aboutMe
                        }
                        </Typography>



                        <div className="contact-details">
                            <Typography variant="h5" component="h2" mt={4}>
                                Contact Details
                            </Typography>
                            <p className="address">
                                <Typography variant="body2" color="textSecondary">
                                    {resumeData.name}
                                </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary">
                                {resumeData.address}
                                </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary">
                                    {resumeData.website}
                                </Typography>
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={0} md={2} />
            </>
        </Grid>
    </section>
  )
}

export default About
