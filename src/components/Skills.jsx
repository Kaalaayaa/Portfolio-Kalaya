import "../App.css";
import htmlLogo from '../logos/html.svg';
import cssLogo from '../logos/css.svg';
import jsLogo from '../logos/js.svg';
import reactLogo from '../logos/react.svg';
import angularLogo from '../logos/angular.svg';
import tsLogo from '../logos/ts.svg';
import tailwindLogo from '../logos/tailwind.svg';
import bootstrapLogo from '../logos/bootstrap.svg';
import nodeLogo from '../logos/node.svg';
import expressLogo from '../logos/express.svg';
import mongoDbLogo from '../logos/mongoDb.svg';
import mariaDbLogo from '../logos/mariaDb.svg';
import webflowLogo from '../logos/webflow.svg';
import figmaLogo from '../logos/figma.svg';
import gitLogo from '../logos/git.svg';

function Skills() {
  return (
    <div className="skills">
      <h2>skills</h2>
      <div className="logos">
        <div className="logo"><img src={htmlLogo} alt="" width="80px"/><p>HTML</p></div>
        <div className="logo"><img src={cssLogo} alt="" width="80px"/><p>CSS</p></div>
        <div className="logo"><img src={jsLogo} alt="" width="80px"/><p>Javascript</p></div>
        <div className="logo"><img src={tsLogo} alt="" width="80px"/><p>Typescript</p></div>
        <div className="logo"><img src={reactLogo} alt="" width="80px"/><p>React</p></div>
        <div><img src={angularLogo} alt="" width="80px"/><p>Angular</p></div>
        <div><img src={tailwindLogo} alt="" width="80px"/><p>Tailwind</p></div>
        <div><img src={bootstrapLogo} alt="" width="80px"/><p>Bootstrap</p></div>
        <div><img src={nodeLogo} alt="" width="80px"/><p>Node js</p></div>
        <div><img src={expressLogo} alt="" width="80px"/><p>Express</p></div>
        <div><img src={mongoDbLogo} alt="" width="80px"/><p>Mongo DB</p></div>
        <div><img src={mariaDbLogo} alt="" width="80px"/><p>Maria DB</p></div>
        <div><img src={webflowLogo} alt="" width="80px"/><p>Webflow</p></div>
        <div><img src={figmaLogo} alt="" width="80px"/><p>Figma</p></div>
        <div><img src={gitLogo} alt="" width="80px"/><p>GIT</p></div>
      </div>
    </div>
  );
}

export default Skills;
