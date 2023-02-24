import "../App.css";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <div class="sidenav">
      <li>
        <Link activeClass="active" spy={true} to={"home"} smooth={true} offset={0} duration={600}>
          home
        </Link>
      </li>
      <li>
        <Link activeClass="active" spy={true} to={"about"} smooth={true} offset={0} duration={600}>
          about
        </Link>
      </li>
      <li>
        <Link activeClass="active" spy={true} to={"skills"} smooth={true} offset={0} duration={600}>
          skills
        </Link>
      </li>
      <li>
        <Link activeClass="active" spy={true} to={"projects"} smooth={true} offset={0} duration={600}>
          projects
        </Link>
      </li>
      <li>
        <Link activeClass="active" spy={true} to={"contact"} smooth={true} offset={0} duration={600}>
          contact
        </Link>
      </li>
    </div>
  );
}

export default Navigation;