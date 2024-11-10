import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import resumeData from './resumeData';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import Experiences from './components/Experiences';


function App() {


  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Projects resumeData={resumeData}/>
      <Contact resumeData={resumeData} />
    </div>
  );
}

export default App;
