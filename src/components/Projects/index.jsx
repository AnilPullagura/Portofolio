import {Chrono} from 'react-chrono'
import {FaLink} from 'react-icons/fa'
import Header from '../Header'
import CursorGlow from '../CursorGlow'
import './index.css'

const items = [
  {
    title: '2025',
    cardDetailedText: (
      <div className="chrono-box">
        <h3 className="title">
          <a
            href="https://aninovawatch.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
          >
            Nxt Watch
            <span className="link-text">
              view here <FaLink className="nav-link" />
            </span>
          </a>
        </h3>
        <h4 style={{margin: '5px 0', color: '#555'}}>Video Streaming App</h4>
        <p style={{fontSize: '14px', color: '#9C9C9C'}}>
          React-based video streaming app with JWT authentication, protected
          routes, theme switching, SQL integration, and responsive playback.
        </p>
      </div>
    ),
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://res.cloudinary.com/dxrdjcafp/image/upload/v1766838046/Screenshot_2025-12-27_174950_ejmc1g.png',
      },
    },
  },
  {
    title: '2025',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://res.cloudinary.com/dxrdjcafp/image/upload/v1766838118/Screenshot_2025-12-27_175146_g3xqyr.png',
      },
    },
    cardDetailedText: (
      <div className="chrono-box">
        <h3 className="title">
          <a
            href="https://anilnxtwear.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
          >
            Nxt Trends
            <span className="link-text">
              view here <FaLink className="nav-link" />
            </span>
          </a>
        </h3>
        <h4 style={{margin: '5px 0', color: '#555'}}>E-commerce Website</h4>
        <p style={{fontSize: '14px', color: '#9C9C9C'}}>
          React-powered shopping site with secure login, dynamic filters, API
          integration, and responsive design.
        </p>
      </div>
    ),
  },
  {
    title: '2025',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://res.cloudinary.com/dxrdjcafp/image/upload/v1766838175/Screenshot_2025-12-27_175245_zcwiol.png',
      },
    },
    cardDetailedText: (
      <div className="chrono-box">
        <h3 className="title">
          <a
            href="https://aniljobify.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
          >
            Jobify App
            <span className="link-text">
              view here <FaLink className="nav-link" />
            </span>
          </a>
        </h3>
        <h4 style={{margin: '5px 0', color: '#555'}}>E-commerce Website</h4>
        <p style={{fontSize: '14px', color: '#9C9C9C'}}>
          Jobify is a responsive job-search platform inspired by LinkedIn, built
          with React, Node.js, Express, and JWT authentication. It features
          protected routes, reusable components, and secure APIs, focusing on UI
          clarity, accessibility, and performance for a professional,
          production-ready experience.
        </p>
      </div>
    ),
  },

  {
    title: '2025',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://res.cloudinary.com/dxrdjcafp/image/upload/v1766838775/Screenshot_2025-12-27_180242_qqqvfi.png',
      },
    },
    cardDetailedText: (
      <div className="chrono-box">
        <h3 className="title">
          <a
            href="https://foodweb45.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
          >
            Food Order Web Application
            <span className="link-text">
              view here <FaLink className="nav-link" />
            </span>
          </a>
        </h3>
        <h4 style={{margin: '5px 0', color: '#555'}}>E-commerce Website</h4>
        <p style={{fontSize: '14px', color: '#9C9C9C'}}>
          A restaurant food-ordering website enabling customers to browse menus
          and place orders online. Built with React, it emphasizes simplicity,
          responsive design, and smooth user interactions, providing a practical
          solution for digital restaurant management and customer engagement.
        </p>
      </div>
    ),
  },
  {
    title: '2025',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://res.cloudinary.com/dxrdjcafp/image/upload/v1766838929/Screenshot_2025-12-27_180518_nxklab.png',
      },
    },
    cardDetailedText: (
      <div className="chrono-box">
        <h3 className="title">
          <a
            href="https://apriliawebstore.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
          >
            Artia Aprilia Remix
            <span className="link-text">
              view here <FaLink className="nav-link" />
            </span>
          </a>
        </h3>
        <h4 style={{margin: '5px 0', color: '#555'}}>E-commerce Website</h4>
        <p style={{fontSize: '14px', color: '#9C9C9C'}}>
          A fully responsive blog website inspired by the Aprilia biking brand.
          Built with React, it showcases modern UI/UX, smooth transitions, and
          mobile-friendly layouts, delivering a stylish digital experience for
          motorcycle enthusiasts and brand-inspired storytelling.
        </p>
      </div>
    ),
  },
]

const Projects = () => (
  <div className="project-main-container">
    <CursorGlow />
    <Header />
    <h1 style={{color: 'white', textAlign: 'center'}}>Projects</h1>
    <p className="project-breif">
      My portfolio highlights full‑stack applications built with React, Node.js,
      Express, MongoDB, SQL, and Python. Projects span streaming, e‑commerce,
      job search, productivity, and blogs, showcasing authentication, API
      integration, responsive design, and creative UI/UX in scalable,
      production‑ready solutions.
    </p>
    <div className="project-container">
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        theme={{
          cardBgColor: '#1b1b1b8a',
          timelineBgColor: '#1b1b1b',
        }}
      />
    </div>
    <div className="project-container-mobile">
      <Chrono
        items={items}
        mode="VERTICAL"
        theme={{
          cardBgColor: '#1b1b1b8a',

          timelineBgColor: '#1b1b1b',
        }}
      />
    </div>
  </div>
)
export default Projects
