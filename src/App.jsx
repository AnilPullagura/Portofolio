import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/projects" element={<Projects />} />
    <Route exact path="/skills" element={<Skills />} />
  </Routes>
)

export default App
