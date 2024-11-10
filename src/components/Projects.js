import React from 'react'
import { Grid, GridItem, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import Project from './Project'

const Projects = ({ resumeData }) => {

  return (
    <section id="projects" class='section'>
        <div className="projects-container">
            <Typography mb={4} variant="h4" align="center" gutterBottom>
                Check out some of my projects
            </Typography>
            <Grid container spacing={2}>
            {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
                return(
                <Grid item xs={12} sm={6} md={4} className="columns portfolio-item">
                    <Card>
                        <Project data={item}/>
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
