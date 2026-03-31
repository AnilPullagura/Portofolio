import SliderImport from 'react-slick'
const Slider =
  typeof SliderImport === 'function' ? SliderImport : SliderImport.default
import {BiSolidLike} from 'react-icons/bi'
import {MdWorkHistory, MdEmail} from 'react-icons/md'
import {LuMessageCircleMore} from 'react-icons/lu'
import {HiBadgeCheck} from 'react-icons/hi'
import {BiLogoTypescript} from 'react-icons/bi'
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from 'react-icons/fa'
import {LiaNodeJs} from 'react-icons/lia'
import {HiMiniCommandLine} from 'react-icons/hi2'
import {SiMongodb, SiMysql} from 'react-icons/si'

import CursorGlow from '../CursorGlow'
import Header from '../Header'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const hireList = [
  {
    id: 1,
    title: 'Workaholic',
    icon: <MdWorkHistory className="hire-icon" />,
    breif:
      'I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive.',
  },
  {
    id: 2,
    title: 'Communicative',
    icon: <LuMessageCircleMore className="hire-icon" />,
    breif:
      'I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver.',
  },
  {
    id: 3,
    title: 'Cooperative',
    icon: <BiSolidLike className="hire-icon" />,
    breif:
      'Behind the successful project, there’s a great team. I can build a good cooperation and remain consistent with the goal.',
  },
  {
    id: 4,
    title: 'Perfectionist',
    icon: <HiBadgeCheck className="hire-icon" />,
    breif:
      'I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.',
  },
]

const skillslist = [
  {
    id: 0,
    title: 'TypeScript',
    icon: <BiLogoTypescript className="skill-icon" />,
  },
  {
    id: 1,
    title: 'React',
    icon: <FaReact className="skill-icon" />,
  },
  {
    id: 2,
    title: 'Node Js',
    icon: <LiaNodeJs className="skill-icon" />,
  },
  {
    id: 3,
    title: 'Mongo DB',
    icon: <SiMongodb className="skill-icon" />,
  },
  {
    id: 4,
    title: 'HTML',
    icon: <FaHtml5 className="skill-icon" />,
  },
  {
    id: 5,
    title: 'CSS',
    icon: <FaCss3Alt className="skill-icon" />,
  },
  {
    id: 6,
    title: 'SQL',
    icon: <SiMysql className="skill-icon" />,
  },
  {
    id: 7,
    title: 'PYTHON',
    icon: <FaPython className="skill-icon" />,
  },
  {
    id: 8,
    title: 'BootStrap',
    icon: <FaBootstrap className="skill-icon" />,
  },
  {
    id: 9,
    title: 'Coomand Line & GIT',
    icon: <HiMiniCommandLine className="skill-icon" />,
  },
]

const Skills = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className="skills-main-container">
      <CursorGlow />
      <Header />
      <div>
        <h1 style={{color: 'white', textAlign: 'center'}}>My Skills</h1>
        <p className="project-breif">
          My skill set spans full‑stack development with React, Node.js,
          Express, MongoDB, SQL, and Python. I am proficient in HTML, CSS,
          Bootstrap, and Git/command‑line, with certifications from NxtWave
          validating my expertise in scalable applications and creative UI/UX
          design.
        </p>
      </div>
      <div className="skills-container">
        <Slider {...settings}>
          {skillslist.map(each => (
            <div key={each.id} className="skill-item">
              {each.icon}
              <p>{each.title}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hire-me-container">
        <h1 className="hire-me-head">WHY HIRE ME</h1>
        <h1 className="hire-me-text">Why Hire Me</h1>
      </div>

      <ul className="hire-list">
        {hireList.map(each => (
          <li key={each.id}>
            <div className="hire-box">
              <div className="icon-div"> {each.icon}</div>
              <div>
                <h1 className="hire-box-title">{each.title}</h1>
                <p className="hire-box-para">{each.breif}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="get-touch-container">
        <h1>Get in Touch</h1>
        <div className="get-in-touch-box">
          <ul>
            <li className="get-touch-item">
              <FaPhoneAlt className="get-touch-icon" />
              <div>
                <p className="phone">Phone</p>
                <p className="number">+919392771355</p>
              </div>
            </li>
            <li className="get-touch-item">
              <MdEmail className="get-touch-icon" />
              <div>
                <p className="phone">Email</p>
                <p className="number">anil2020kumar1@gmail.com</p>
              </div>
            </li>
            <li className="get-touch-item">
              <FaMapMarkerAlt className="get-touch-icon" />
              <div>
                <p className="phone">Address</p>
                <p className="number">
                  Ravulakolanu 1-80,Simhadripuram,516401,Kadapa
                </p>
              </div>
            </li>
          </ul>
          <div className="get-touch-img">
            <img
              style={{height: '90%'}}
              src="https://res.cloudinary.com/dxrdjcafp/image/upload/v1766929965/Vector_m43eg9.png"
              alt="vector"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
