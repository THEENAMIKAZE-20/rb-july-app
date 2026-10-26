import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
import { Tooltip } from '@mui/material';

function Header() {
    const aboutMessage="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."
  return (
    <div>
 <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className='bg-dark'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img   src="https://i.etsystatic.com/27907771/r/il/de41c5/5356319364/il_1140xN.5356319364_donq.jpg" alt="" style={{ width: "40px", height: "40px", objectFit: "cover" }}
 />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to={'/'} className=' text-light text-decoration-none'>  AI-Resume Builder </Link>
          </Typography>
           <Link to={'/all-resumes'} className=' text-light text-decoration-none '>  ALL RESUMES </Link>
            <Link to={'/download'} className=' text-light text-decoration-none mx-5 '>  ALL DOWNLOADS </Link>
         <Tooltip title={aboutMessage}>
             <Button color="inherit" className='fs-6'>ABOUT US</Button>
         </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
