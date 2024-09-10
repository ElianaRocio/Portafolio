import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Desplaza al inicio de la página al cambiar de ruta
  }, [pathname]);

  return null;
}

export default ScrollToTop;
