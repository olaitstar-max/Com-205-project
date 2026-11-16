import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [tablesBooked, setTablesBooked] = useState(12)

  const bookTable = () => {
    setTablesBooked(prev => prev + 1)
  }

  return (
    <div className="page home">
      <section className="hero">
        <h1>Welcome to Bella Vista</h1>
        <p className="tagline">
          Authentic Italian cuisine in a warm and elegant atmosphere
        </p>
        <p>
          Bella Vista is a family-owned restaurant serving classic Italian dishes
          made with fresh, locally sourced ingredients. Join us for lunch, dinner
          or a special celebration.
        </p>

        <div className="hero-buttons">
          <Link to="/menu" className="btn primary">
            View Our Menu
          </Link>
          <Link to="/contact" className="btn secondary">
            Reserve a Table
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>{tablesBooked}</h3>
          <p>Tables Booked Today</p>
          <button onClick={bookTable} className="btn small">
            Book Another Table
          </button>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className="stat-card">
          <h3>4.9★</h3>
          <p>Customer Rating</p>
        </div>
      </section>
    </div>
  )
}

export default Home