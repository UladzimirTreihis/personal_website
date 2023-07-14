import './App.css';
import Header from './components/Header';
import resumeData from './resumeData';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';


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
