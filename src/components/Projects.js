import React from 'react'
import { Grid, GridItem, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'

const Projects = ({ resumeData }) => {

    const handleMouseEnter = (e) => {
        e.currentTarget.querySelector(".project-image").style.filter = "brightness(40%)";
        e.currentTarget.querySelector(".checkout").classList.add("show");
        e.currentTarget.querySelector(".checkout").classList.remove("hide");
    }
    const handleMouseLeave = (e) => {
        e.currentTarget.querySelector(".project-image").style.filter = "brightness(100%)";
        e.currentTarget.querySelector(".checkout").classList.add("hide");
        e.currentTarget.querySelector(".checkout").classList.remove("show");
    }
  return (
    <section id="projects" class='section'>
        <div className="projects-container">
            <h1>Check Out Some of My Projects</h1>
            <Grid container spacing={2}>
            {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
                return(
                <Grid item xs={6} md={3} className="columns portfolio-item">
                    <Card>
                        <Typography>
                            {item.name}
                        </Typography>
                        <a 
                            onMouseEnter={(e) => {handleMouseEnter(e)}}
                            onMouseLeave={(e) => {handleMouseLeave(e)}}
                            className='image-link' href={`${item.url}`}>
                            <p className="checkout hide">Check it out</p>
                            <CardMedia
                                className="project-image"
                                component="img"
                                alt={`${item.name}`}
                                height="140"
                                image={`${item.imgurl}`}
                            />
                        </a>

                            <Button sx={{color: "#b196ef"}}>Source Code</Button>

                    </Card>
                </Grid>
                )
            })
            }

            </Grid>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            
            </div>
        </div>
    </section>
  )
}

export default Projects
