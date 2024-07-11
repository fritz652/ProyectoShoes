import './Nav.css'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <nav className='navBar'>
      <Link to="/" className="logo">
        <h1>Fritz</h1>
      </Link>
      <ul>
        <li className='noStyle'>
            <Link className="menu-link" to="/hombre">Hombre</Link>
        </li>
        <li className='noStyle'>
            <Link className="menu-link" to="/mujer">Hombre</Link>
        </li>
      </ul>
    </nav>
  )
}
