import React from 'react'
import { Avatar, Grid, Link, Typography } from '@mui/material';


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
                        <Typography variant="body1" color="textPrimary" mt={2}>
                        📍 Currently based in {resumeData.basedIn}
                        </Typography>



                        <div className="contact-details">
                            <Typography variant="h5" mt={4}>
                                <Link
                                    href="/docs/Uladzimir_Treihis_resume.pdf"
                                    download="Uladzimir_Treihis_resume.pdf"
                                    underline="hover"
                                    color="primary"
                                    sx={{ display: 'inline-block', mt: 2.5 }}
                                >
                                    Click here to download my resume
                                </Link>
                            </Typography>
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
