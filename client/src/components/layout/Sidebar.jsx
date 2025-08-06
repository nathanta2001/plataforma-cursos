import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/aluno">Área do Aluno</Link></li>
          <li><Link to="/professor">Área do Professor</Link></li>
          <li><Link to="/admin">Área do Administrador</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
