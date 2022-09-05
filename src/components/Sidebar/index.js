import './index.scss'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import LogoK from '../../assets/images/outline.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
// import LogoSubtitle from '../../assets/images/K-logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSitemap,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoK} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="sub" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/koushikdutta/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KoushikDutta1999"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/iamkoushikdutta"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/iamkoushikdutta"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/iamkoushikdutta_1999/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://koushikdutta1999.wixsite.com/koushikdutta1999"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faSitemap} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/aybTVjW4Hn"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
