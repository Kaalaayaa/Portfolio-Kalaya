import "../App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";

function About() {
  return (
    <div class="about">
      <h2>about me</h2>
      <p className="about-me-text">
        Hey there, I'm Kalaya and I'm a junior <span style={{ color: "white", fontWeight: "400" }}>web developer</span> located in <span style={{ color: "white", fontWeight: "400" }}>Berlin</span>.
        I recently completed an intensive 1-year <span style={{ color: "white", fontWeight: "400" }}>MERN stack</span> course at
        Digital Career Institute, and since then, I've been working hard to gain
        real-world experience and improve my skills. While I may not have
        extensive experience yet, I love web development and I'm constantly
        learning through personal projects and collaboration with other
        developers. I've even had the opportunity to complete an internship,
        which was an amazing learning experience. When I'm not coding, you can
        usually find me <span style={{ color: "white", fontWeight: "400" }}>bouldering</span>, cooking up a storm in the kitchen, or
        working on my own coding projects. I believe that having a diverse set
        of interests helps me stay <span style={{ color: "white", fontWeight: "400" }}>creative</span> and inspired in my work. On my
        portfolio website, you'll find a variety of projects that showcase my
        technical abilities and creativity. I'm always looking for new
        <span style={{ color: "white", fontWeight: "400" }}> challenges</span> and opportunities to grow as a developer.
      </p>
      <div className="contacts">
        <span>
          <FaLinkedin
            style={{ color: "white", fontSize: "30px", marginRight: "30px" }}
          />
        </span>
        <span>
          <FaGithub
            style={{ color: "white", fontSize: "30px", marginRight: "30px" }}
          />
        </span>
        <span>
          <FiCodesandbox
            style={{ color: "white", fontSize: "30px", marginRight: "30px" }}
          />
        </span>
      </div>
      <button type="submit">My Résumé.</button>
    </div>
  );
}

export default About;
