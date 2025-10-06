import { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Edu from './components/Edu.jsx'
import Origins from './components/Origins.jsx'
import MyBackground from './components/MyBackground.jsx'
import Publications from './components/Publications.jsx'
import Webinars from './components/Webinars.jsx'
import Posters from './components/Posters.jsx'
import SafeToLearn from './components/SafeToLearn.jsx'
import StoryBooks from './components/StoryBooks.jsx'
import InterlinkedThemes from './components/InterlinkedThemes.jsx'
import SuggestionBoxes from './components/SuggestionBoxes.jsx'
import Recorded from './components/1-7.jsx'
import Handouts from './components/session handouts.jsx'


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const handleNavClick = () => setIsSidebarOpen(false)

  return (
    <div className="app">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button
          className={`hamburger ${isSidebarOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isSidebarOpen}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="menu" aria-hidden={!isSidebarOpen}>
          <NavLink to="/" end onClick={handleNavClick}>Home</NavLink>
          <NavLink to="/my-background" onClick={handleNavClick}>My Background</NavLink>
          <NavLink to="/publications" onClick={handleNavClick}>Publications</NavLink>
          <NavLink to="/origins" onClick={handleNavClick}>Origins</NavLink>
          <NavLink to="/edu" onClick={handleNavClick}>Educational Psychotherapy</NavLink>
          <NavLink to="/webinars" onClick={handleNavClick}>Webinars</NavLink>
          <NavLink to="/posters" onClick={handleNavClick}>2023 Posters</NavLink>
          <NavLink to="/safe-to-learn" onClick={handleNavClick}>Safe to Learn Course</NavLink>
          <NavLink to="/story-books" onClick={handleNavClick}>Story books</NavLink>
          <NavLink to="/interlinked-themes" onClick={handleNavClick}>Interlinked themes</NavLink>
          <NavLink to="/suggestion-boxes" onClick={handleNavClick}>Suggestion boxes</NavLink>
          <div className="menu-spacer" />
          <NavLink to="/contact" className="contact-link" onClick={handleNavClick}>Contact</NavLink>
        </nav>
      </aside>

      <main className="content">
        {/* Wavy header image full-height without cropping */}
        <div className="wavy-header">
          <img src="/wavylines.gif" alt="Decorative wavy lines" />
        </div>

        <section className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-background" element={<MyBackground />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/origins" element={<Origins />} />
            <Route path="/edu" element={<Edu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/posters" element={<Posters />} />
            <Route path="/safe-to-learn" element={<SafeToLearn />} />
            <Route path="/story-books" element={<StoryBooks />} />
            <Route path="/interlinked-themes" element={<InterlinkedThemes />} />
            <Route path="/suggestion-boxes" element={<SuggestionBoxes />} />
            <Route path="/1-7" element={<Recorded />} />
            <Route path="/session handouts" element={<Handouts />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App
