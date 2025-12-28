import {Link} from 'react-router-dom'
import {FaGithub, FaWhatsapp} from 'react-icons/fa'
import {CiLinkedin} from 'react-icons/ci'
import CursorGlow from '../CursorGlow'
import Header from '../Header'

import './index.css'

const conectList = [
  {
    id: 1,
    link: 'https://github.com/AnilPullagura',
    icon: <FaGithub />,
    text: 'Git Hub',
  },
  {
    id: 2,
    link: 'www.linkedin.com/in/anilpullagura725852341',
    icon: <CiLinkedin />,
    text: 'Linkedin',
  },
  {
    id: 3,
    link: '',
    icon: <FaWhatsapp />,
    text: '+919392771355',
  },
]

const Home = () => {
  const a = null
  return (
    <div className="home-main-container">
      <CursorGlow />
      <Header className="Header" />
      <div className="home-container">
        <div className="profile-container">
          <div className="text-box">
            <h1 className="title-head">Anil Pullagura</h1>
            <p className="para">
              I build production-ready web applications using React, Node.js,
              Express, and MongoDB — optimized for performance, security, and
              modern UI/UX. With a strong foundation in backend logic, API
              design, and real-world debugging, I deliver scalable solutions
              that recruiters and teams can trust. Let’s turn ideas into impact.
            </p>
            <Link className="link-btn btn-link-item" to="/about">
              <button type="button" className="btn">
                Know Me
              </button>
            </Link>
          </div>
          <div className="img-box">
            <img
              className="profile-img"
              src="https://res.cloudinary.com/dxrdjcafp/image/upload/v1766760686/1766759814702_mmh34e.jpg"
              alt="profile"
            />
          </div>
        </div>
        <div className="links-container">
          <p className="connect">Connect With</p>
          <ul className="connect-list">
            {conectList.map(each => (
              <li key={each.id}>
                <a href={each.link} target="blank">
                  <button className="connect-btn" type="button">
                    {each.icon}
                    {each.text}
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Home
