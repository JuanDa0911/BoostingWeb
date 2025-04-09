import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Generador from './pages/Servicios/Generador';
import Lineas from './pages/servicios/Lineas';



function Header() {
  return (
    <header className="bg-light shadow sticky-top">
      <div className="container d-flex justify-content-between align-items-center py-3">
      <Link to="/" className="navbar-brand fw-bold text-primary" ><img src="img/logo.png" width={80} height={80} alt="logo_boosting" /></Link>
        
        <nav className="d-flex align-items-center gap-3">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
              Servicios
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/servicios/generador" className="dropdown-item">Generador</Link></li>
              <li><Link to="/servicios/lineas" className="dropdown-item">Líneas de Transmisión</Link></li>
              <li><Link to="/servicios/actuador" className="dropdown-item">Actuador</Link></li>
              <li><Link to="/servicios/transformador" className="dropdown-item">Transformador</Link></li>
              <li><Link to="/servicios/cables" className="dropdown-item">Cables</Link></li>
              <li><Link to="/servicios/capacitaciones" className="dropdown-item">Capacitaciones</Link></li>
              <li><Link to="/servicios/motor" className="dropdown-item">Motor</Link></li>
            </ul>
          </div>
          <button className="btn btn-primary">Acceder</button>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5 border-top">
      <div className="fw-bold">BoostingSAS</div>
      <div>Ubicación: Calle Ficticia 123, Ciudad Imaginaria</div>
      <div>Contacto: contacto@boostingsas.com | +57 300 000 0000</div>
    </footer>
  );
}

function Body() {
  return (
    <main className="container text-center py-5">
      <h1 className="display-4 text-primary">Bienvenido a BoostingSAS</h1>
      <p className="lead">Contenido de ejemplo. Pronto habrá más información aquí.</p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios/:servicio" element={<Body />} />
        <Route path="/servicios/generador" element={<Generador />} />
        <Route path="/servicios/lineas" element={<Lineas />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
