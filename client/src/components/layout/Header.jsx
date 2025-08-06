import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Plataforma de Cursos</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}