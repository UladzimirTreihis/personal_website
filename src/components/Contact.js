import React from 'react'
import { Typography } from '@mui/material'

const Contact = ({ resumeData }) => {
  return (
    <section id='contact' class='section'> 
        <Typography variant="h6" component="h2">
          Reach me out for any work or other suggestions below
        </Typography>
        <ul className="social">
                    {
                        resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                        return(
                                <li key={item.name}>
                                    <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                </li>
                                )
                            }
                        )
                    }
        </ul>
    </section>
  )
}

export default Contact
