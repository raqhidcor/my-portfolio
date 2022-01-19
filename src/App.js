import './App.css';
import Home from "./Components/Home/Home.jsx"
import About from "./Components/About/About.jsx"
import Tech from "./Components/Tech/Tech.jsx"
import Github from './Components/Github/Github';
import Projects from './Components/Projects/Projects.jsx';
import ContactMe from './Components/ContactMe/ContactMe.jsx';
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
    <Home/>
    <About/>
    <Tech/>
    <Github/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    </div>
  );
}

export default App;
