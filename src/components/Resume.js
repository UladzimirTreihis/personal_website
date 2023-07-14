import React from 'react'
import { Grid, Rating } from '@mui/material'

const Resume = ({ resumeData }) => {


  return (
    <section id="resume" class='section'>
        <Grid container spacing={3}>
            <>  
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={3}>
                    <h1><span>Education</span></h1>
                </Grid>
                <Grid item xs={12} md={5}>
                <div className="text-left">
                    {
                    resumeData.education && resumeData.education.map((item)=>{
                        return(
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>{item.UniversityName}</h3>
                                <p className="info">
                                {item.specialization}
                                <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                <p>
                                {item.Achievements}
                                </p>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>
                </Grid>
                <Grid item xs={0} md={2} />
            </>
            <>  
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={3}>
                    <h1><span>Experience</span></h1>
                </Grid>
                <Grid item xs={12} md={5}>
                <div className="text-left">
                    {
                    resumeData.education && resumeData.education.map((item)=>{
                        return(
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>{item.UniversityName}</h3>
                                <p className="info">
                                {item.specialization}
                                <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                <p>
                                {item.Achievements}
                                </p>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>
                </Grid>
                <Grid item xs={0} md={2} />
            </>
            <>
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={3}>
                    <h1><span>Skills</span></h1>
                </Grid>
                <Grid item xs={12} md={5}>
                    <div className="text-left">
                        <p>
                        {resumeData.skillsDescription}
                        </p>

                        <div className="bars">

                            <ul className="skills">
                            {
                            resumeData.skills && resumeData.skills.map((item) => {
                                return(
                                <li>        
                                    <h4>{item.skillname}</h4>                                 
                                    <Rating name={`${item.skillname}`} value={item.level} readOnly precision={0.5}/>
                                </li>
                                )
                            })
                            }
                            </ul>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={0} md={2} />
            
            </>
        </Grid>

 </section>
  )
}

export default Resume
