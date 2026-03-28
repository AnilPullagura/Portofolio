import {Link} from 'react-router-dom'
import Header from '../Header'
import CursorGlow from '../CursorGlow'
import './index.css'

const About = () => {
  const a = null
  return (
    <div className="about-container">
      <CursorGlow />
      <Header />
      <div className="about-content-box">
        <div>
          <h1 className="about">About Me</h1>
          <p className="role">
            I am a Full Stack Developer skilled in the MERN stack, Python, and
            SQL, with hands‑on project experience from NxtWave. Passionate about
            building scalable applications and creative UI/UX, I bring
            problem‑solving ability and industry‑ready expertise to modern web
            development.
          </p>
        </div>
        <div className="details-box">
          <div className="box">
            <h1 className="head">Education</h1>
            <p className="details">
              -Bachelor of Commerce (Computer Applications) Loyola Degree
              College, 2022 – 2025 Achieved: 80% <br /> - Intermediate (CEC)
              2021 – 2022 Achieved: 78% <br />- MERN Stack Trainee NxtWave, 2025
              (Completed on 18th December 2025)
            </p>
          </div>
          <div className="box">
            <h1 className="head">Address</h1>
            <p className="details">
              1-45, Ravulakolanu, Simhadripuram, Kadapa – 516401, Andhra
              Pradesh, India
            </p>
          </div>
          <div className="box">
            <h1 className="head">MERN Journey</h1>
            <p className="details">
              I pursued intensive training in the MERN stack along with Python
              and SQL at NxtWave in 2025, completing the program with practical,
              industry‑oriented projects.
              <br /> Through this journey, I gained strong expertise in building
              modern web applications using React for dynamic frontends, Node.js
              and Express for scalable backends, and MongoDB and SQL for
              efficient database management.
              <br /> I also strengthened my skills in Python scripting,
              debugging, deployment, and version control with Git/GitHub.
              <br /> My learning was entirely project‑driven, where I developed
              applications such as a full‑stack e‑commerce platform with
              authentication Spotify remix and NxtWatch with CRUD operations and
              JWT security.Looking forwad to contribute effectively to
              real‑world development teams.
              <span>
                <Link className="view-Link" to="/projects">
                  Look for project details
                </Link>
              </span>
            </p>
          </div>
          <div className="box">
            <h1 className="head">Skills</h1>
            <p className="details">
              I have developed strong technical expertise across both frontend
              and backend technologies. <br /> My core skills include React.js,
              Node.js, Express.js, and MongoDB, enabling me to build scalable
              full‑stack applications. I am also proficient in SQL and Python,
              which strengthen my ability to handle data‑driven solutions and
              backend logic.
              <br /> On the frontend, I am skilled in HTML, CSS, and Bootstrap,
              allowing me to design responsive and modern user interfaces.
              Additionally, I am experienced with Git and command‑line tools for
              version control and collaborative development.
              <br /> I hold multiple certifications from NxtWave that validate
              my MERN stack and Python expertise, and a minor certification in
              Power BI from Stave Info Tech, which adds value in data
              visualization and analytics.
              <Link className="view-Link" to="/skills/">
                Look more about
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
