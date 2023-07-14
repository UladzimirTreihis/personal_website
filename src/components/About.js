import React from 'react'
import { Avatar, Grid } from '@mui/material';


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
                        <h2>About Me</h2>
                        <p>
                        {
                            resumeData.aboutme
                        }
                        </p>



                        <div className="contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{resumeData.name}</span>
                                <br></br>
                                <span>
                                {resumeData.address}
                                </span>
                                <br></br>
                                <span>{resumeData.website}</span>
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
