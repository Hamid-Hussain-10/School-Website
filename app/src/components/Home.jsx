import { NavLink } from 'react-router-dom';
import './Home.css';
function Home() {
  return (
    <div>
      <div className="homepage">
        <div className="hero">
          <h2>The Best Education Place For Your Child</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi error aspernatur nam praesentium veritatis nobis facere quo architecto.</p>
          <div className="btn">
          <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "no")}
            >
          <button >Enroll Now</button>
            </NavLink>
          <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "no")}
            >
          <button>Get Classes</button>
              
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
