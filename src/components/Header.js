import { useEffect, useState } from 'react';

const Header = ({ resumeData }) => {
    
    const [section, setSection] = useState('home')

    const handleScrollEvent = async () => {

        const sections = await document.querySelectorAll('.section')

        let negativeMax = await {section: 'home', y: -1000000}
        for(let section of sections) {
            let sectionY = await section.getBoundingClientRect().y
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
        console.log(section)
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
            <nav id="nav-wrap">
                <ul id="nav" className="nav" style={{ backgroundColor: section != "home" ? "#11ABB0" : "transparent", opacity: "85%"}}>
                    <li className={section=='home' ? 'home current' : 'home'}><a className="scroll" href="#home">Home</a></li>
                    <li className={section=='about' ? 'about current' : 'about'}><a className="scroll" href="#about">About</a></li>
                    <li className={section=='resume' ? 'resume current' : 'resume'}><a className="scroll" href="#resume">Resume</a></li>
                    <li className={section=='projects' ? 'projects current' : 'projects'}><a className="scroll" href="#projects">Projects</a></li>
                    <li className={section=='contact' ? 'contact current' : 'contact'}><a className="scroll" href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="banner">
                <div className="banner-text">
                <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                <h3 className="role">I am a {resumeData.role}.{resumeData.roleDescription}
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