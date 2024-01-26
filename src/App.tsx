import './App.css';
import Sidebar from './components/sidebar/sidebar';
import About from './components/about/about';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Skills from './components/Skills/Skills';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </main>
    
    </>
  );
}

export default App;
