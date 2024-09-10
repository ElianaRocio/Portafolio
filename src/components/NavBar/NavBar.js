import { Link, useLocation } from 'react-router-dom';

export default function NavBar({ navBarOptions }) {
  let location = useLocation();
  const activePath = location.pathname;

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: '#ffffff', // Fondo blanco del navbar
        padding: '0 2rem', // Espaciado horizontal aumentado
        marginBottom: '30px', // Espacio adicional debajo del navbar
      }}
    >
      <div className="container-fluid">
        <span
          className="navbar-brand"
          style={{
            color: '#0a4c58',
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 'bolder',
          }}
        >
          <strong>Portafolio</strong>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navBarOptions.map((navBarOption, index) => {
              const isActive = navBarOption.to === activePath;
              return (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    to={navBarOption.to}
                    style={{
                      color: isActive ? '#ffffff' : '#0a4c58', // Texto para la opción activa
                      backgroundColor: isActive ? '#ef3a5d' : 'transparent', // Fondo para la opción activa
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 'bolder',
                      borderRadius: '20px',
                      padding: '10px 25px', // Botones menos altos y más largos
                      textAlign: 'center',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s ease, color 0.3s ease',
                      display: 'block',
                      margin: '15px 0', // Aumento del espacio entre los botones
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(12, 105, 128, 0.8)'; // Color de fondo en hover con 80% opacidad
                        e.currentTarget.style.color = '#ffffff'; // Texto blanco en hover
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent'; // Fondo transparente
                        e.currentTarget.style.color = '#0a4c58'; // Texto en tono más oscuro
                      }
                    }}
                  >
                    {navBarOption.option}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="d-flex">
          <a
            href="https://www.linkedin.com/in/elianamdb/"
            style={{
              color: '#0a4c58',
              fontSize: '20px',
              margin: '0 20px', // Espaciado entre los iconos
            }}
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/ElianaRocio"
            style={{
              color: '#0a4c58',
              fontSize: '20px',
              margin: '0 20px', // Espaciado entre los iconos
            }}
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://wa.me/62423144"
            style={{
              color: '#0a4c58',
              fontSize: '20px',
              margin: '0 20px', // Espaciado entre los iconos
            }}
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
      <div
        style={{
          height: '1px', // Línea más delgada
          backgroundColor: '#ef3a5d',
          marginTop: '20px', // Espacio adicional entre el navbar y la línea
        }}
      ></div>
    </nav>
  );
}
