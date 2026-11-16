import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Bella Vista
        </Link>

        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={() => setIsOpen(false)}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar