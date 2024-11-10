import { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material';

const NavWrap = styled('nav')({
    font: "11px 'opensans-bold', sans-serif",
    width: "100%",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    margin: "0 auto",
    zIndex: 100,
    position: "fixed",
    left: 0,
    top: 0,
    transition: "background-color 0.7s ease",
})

const Header = ({ resumeData }) => {
    
    const [section, setSection] = useState('home')
    const [anchorEl, setAnchorEl] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);


    const isMobile = useMediaQuery('(max-width:600px)'); // Mobile breakpoint

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };

    const handleScrollEvent = async () => {

        const sections = document.querySelectorAll('.section')

        let negativeMax = {section: 'home', y: -1000000}
        for(let section of sections) {
            let sectionY = section.getBoundingClientRect().y
            console.log(`current section: ${section.id}, y: ${sectionY}`)
            if (sectionY <= 0 && sectionY > negativeMax.y) {
                negativeMax.section = [section.id];
                negativeMax.y = sectionY;
                console.log(`current section: ${section.id}, y: ${sectionY}`)
            }
        }
        if (negativeMax.section !== section) {
            setSection(negativeMax.section)
        }

        setIsScrolled(window.scrollY > 0);
    }
    
    const registerEvent = () => {
        document.addEventListener("scroll", handleScrollEvent);
    }
    
    const unRegisterEvent = () => {
        document.removeEventListener("scroll", handleScrollEvent);
    }
    
    useEffect(() => {

        //Register the event inside useEffect after the component mounts
        registerEvent();
    
        //Cleanup the registered event once the component is unmounted from 
        //the DOM
        return unRegisterEvent;
    
    }, [section]);

    return (
      
        <header id="home" class='section'>
            <NavWrap sx={{
                backgroundColor: isScrolled && isMobile ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                }}>
                {/* <ul id="nav" className="nav" style={{ backgroundColor: section != "home" ? "#11ABB0" : "transparent", opacity: "85%"}}>
                    <li className={section=='home' ? 'home current' : 'home'}><a className="scroll" href="#home">Home</a></li>
                    <li className={section=='about' ? 'about current' : 'about'}><a className="scroll" href="#about">About</a></li>
                    <li className={section=='resume' ? 'resume current' : 'resume'}><a className="scroll" href="#resume">Resume</a></li>
                    <li className={section=='projects' ? 'projects current' : 'projects'}><a className="scroll" href="#projects">Projects</a></li>
                    <li className={section=='contact' ? 'contact current' : 'contact'}><a className="scroll" href="#contact">Contact</a></li>
                </ul> */}
                {isMobile ? (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                            sx={{ color: '#fff' }}
                        >
                        <ArrowDropDownIcon />
                        <Typography variant="button" sx={{ ml: 1 }}>Menu</Typography>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                        sx: {
                            width: '100vw',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            color: 'white',
                        },
                        }}
                    >
                        <MenuItem onClick={handleMenuClose} sx={{ justifyContent: 'center' }}>
                        <Typography variant="body1" component="a" href="#home" sx={{ color: 'white', textDecoration: 'none' }}>
                            Home
                        </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} sx={{ justifyContent: 'center' }}>
                        <Typography variant="body1" component="a" href="#about" sx={{ color: 'white', textDecoration: 'none' }}>
                            About
                        </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} sx={{ justifyContent: 'center' }}>
                        <Typography variant="body1" component="a" href="#resume" sx={{ color: 'white', textDecoration: 'none' }}>
                            Resume
                        </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} sx={{ justifyContent: 'center' }}>
                        <Typography variant="body1" component="a" href="#projects" sx={{ color: 'white', textDecoration: 'none' }}>
                            Projects
                        </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} sx={{ justifyContent: 'center' }}>
                        <Typography variant="body1" component="a" href="#contact" sx={{ color: 'white', textDecoration: 'none' }}>
                            Contact
                        </Typography>
                        </MenuItem>
                    </Menu>
                    </>
                ) : (
                    <ul id="nav" className="nav" style={{ backgroundColor: section != "home" ? "#11ABB0" : "transparent", opacity: "85%"}}>
                        <li className={section=='home' ? 'home current' : 'home'}><a className="scroll" href="#home">Home</a></li>
                        <li className={section=='about' ? 'about current' : 'about'}><a className="scroll" href="#about">About</a></li>
                        <li className={section=='resume' ? 'resume current' : 'resume'}><a className="scroll" href="#resume">Resume</a></li>
                        <li className={section=='projects' ? 'projects current' : 'projects'}><a className="scroll" href="#projects">Projects</a></li>
                        <li className={section=='contact' ? 'contact current' : 'contact'}><a className="scroll" href="#contact">Contact</a></li>
                    </ul>
                )}
            </NavWrap>

            <div className="banner">
                <div className="banner-text">
                <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                <h3 className="role">
                    I am a {resumeData.role}. {resumeData.roleDescription}
                </h3>
                <hr/>
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
                </div>
            </div>

            <p>
                <a href="#about" className='scrolldown'><i class="fa fa-arrow-circle-down fa-4x" aria-hidden="true"></i></a>
            </p>

        </header>
    );
  }

  export default Header;