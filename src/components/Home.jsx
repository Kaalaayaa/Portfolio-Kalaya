
import "../App.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Project";
import Contact from "./Contact";
import Navigation from "./Navigation";
import portrait from '../portrait.png';
import web_dev from '../web_dev.svg';

function Home() {

  function changeBodyBgColor() {
    const currentColor = window.getComputedStyle(document.body).backgroundColor;
    const newColor = currentColor === 'rgb(186, 218, 85)' ? '#6f5fd9' : 'rgb(186, 218, 85)';
    document.body.style.transition = 'background-color 0.5s ease-in-out';
    document.body.style.background = newColor;
  }

  return (
    <div>
      <Navigation />
      <main className="main">
        <div className="home">
          <h1 className="font-face-picnic" onClick={changeBodyBgColor}>
            Kalaya
          </h1>
          <img src={portrait} alt="" width="690px" height="690px" className="portrait"/>
          <img src={web_dev} alt="" width="500px" height="500px" className="web_dev"/>
          <h1 className="font-face-picnic-pink">É·E</h1>
          <h1 className="font-face-picnic-pink2">E</h1>
          <h1 className="font-face-picnic-pink3">+</h1>
          <h1 className="font-face-picnic-pink4">É·E</h1>
        </div>
        <About id="about"/>
        <Skills id="skills"/>
        <Projects id="projects"/>
        <Contact id="contact"/>
      </main>
    </div>
  );
}

export default Home;
