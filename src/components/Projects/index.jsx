import {Chrono} from 'react-chrono'
import {FaLink} from 'react-icons/fa'
import Header from '../Header'
import CursorGlow from '../CursorGlow'
import './index.css'

const items = [
  {
    title: '2026',
    cardDetailedText: (
      <div className="chrono-box">
        <h3 className="title">
          <a
            href="https://vantixclient.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
          >
            Vantix Ai
            <span className="link-text">
              view here <FaLink className="nav-link" />
            </span>
          </a>
        </h3>
        <h4 style={{margin: '5px 0', color: '#555'}}>
          Vantix powerful image generation Ai
        </h4>
        <p style={{fontSize: '14px', color: '#9C9C9C'}}>
          Full stack Ai image generater from text .built using
          react,node,express.
          <br />
          powerful multi model Ai application by switching seamlessy between ai
          models for offering smooth user experience.
          <br />
          premium looking ui with animation to match industry standards.
          <br />
          models:groq,stability.Ai,groq vison,hugging face ai models
          <br /> git repo link:
          <a
            target="_blank"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
            href="https://github.com/AnilPullagura/Vantix"
          >
            Click here
          </a>
        </p>
      </div>
    ),
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://res.cloudinary.com/dxrdjcafp/image/upload/v1774958543/Body_1_gi1q58.png',
      },
    },
  },
  {
    title: '2026',
    cardDetailedText: (
      <div className="chrono-box">
        <h3 className="title">
          <a
            href="https://eventmanager-pink.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
          >
            Evently
            <span className="link-text">
              view here <FaLink className="nav-link" />
            </span>
          </a>
        </h3>
        <h4 style={{margin: '5px 0', color: '#555'}}>Mern full stack app</h4>
        <p style={{fontSize: '14px', color: '#9C9C9C'}}>
          Full stack Event management web application buit using type script,
          react, node, express and mongo db.focused on real world scaling and
          security
          <br />
          by limiting requests and defend race conditons while bookings.performs
          atomic updates and RBAC practices and system designing.
          <br /> git repo link:
          <a
            target="_blank"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
            href="https://github.com/AnilPullagura/eventmanager"
          >
            Click here
          </a>
          <br />
          Crenditails:only for admin
          <br />
          email:eventadmin123@gmail.com
          <br />
          password:eventadmin
        </p>
      </div>
    ),
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://res.cloudinary.com/dxrdjcafp/image/upload/v1774959241/Body_esvfqf.png',
      },
    },
  },
  {
    title: '2026',
    cardDetailedText: (
      <div className="chrono-box">
        <h3 className="title">
          <a
            href="https://spotifyclone-beige-pi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
          >
            Audio Streaming Web App
            <span className="link-text">
              view here <FaLink className="nav-link" />
            </span>
          </a>
        </h3>
        <h4 style={{margin: '5px 0', color: '#555'}}>Audio Streaming App</h4>
        <p style={{fontSize: '14px', color: '#9C9C9C'}}>
          React-based audio streaming app with JWT authentication, protected
          routes, theme switching, and responsive playback.
          <br />
          git link : <br />
          <a
            target="_blank"
            style={{color: 'whitesmoke', textDecoration: 'none'}}
            href="https://github.com/AnilPullagura/SpotifyClone"
          >
            View here
          </a>
          <br />
          Crenditails:
          <br />
          username:rahul
          <br />
          password:rahul@2021
        </p>
      </div>
    ),
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://res.cloudinary.com/dxrdjcafp/image/upload/v1768547602/Screenshot_2026-01-16_123843_rofujb.png',
      },
    },
  },
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
        scrollable={false}
        allowDynamicUpdate={true}
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
        scrollable={false}
        allowDynamicUpdate={true}
      />
    </div>
  </div>
)
export default Projects
