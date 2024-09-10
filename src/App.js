import './assets/scss/stylesheet.scss';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';



import Uxui from './pages/Uxui/Uxui.js';

import Info1Page from './pages/Info1Page/Info1Page';
import DiseñoGrafico from './pages/Diseñografico/Diseñografico.js';
import JuegoPage from './pages/JuegoPage/JuegoPage.js';
import Airbnbinfo from './pages/Airbnbinfo/Airbnbinfo.js';
import Telefoniainfo from './pages/Telefoniainfo/Telefoniainfo.js';
import Formularioinfo from './pages/Formularioinfo/Formularioinfo.js';
import TipografiaPage from './pages/TipografiaPage/TipografiaPage.js';
import Botinfo from './pages/Botinfo/Botinfo.js';
import Hboinfo from './pages/Hboinfo/Hboinfo.js';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop'; 
import Desarrolloweb from './pages/Desarrolloweb/Desarrolloweb.js';
import Tedxpage from './pages/Tedxpage/Tedxpage.js';



let navBarOptions = [
  { option: 'Home', to: '/' },
  { option: 'UX/UI', to: '/UX/UI' },
  { option: 'Desarrollo Web', to: '/Desarrollo-Web' },
  { option: 'Diseño Gráfico', to: '/Diseno-grafico' },
  
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* para reiniciar scroll*/}
      <NavBar navBarOptions={navBarOptions} />
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="UX/UI" element={<Uxui />} />
          <Route path="Desarrollo-Web" element={<Desarrolloweb />} />
          <Route path="Diseno-grafico" element={<DiseñoGrafico />} />

          <Route path="evaluacion-comparativa" element={<Info1Page />} />

          <Route path="Caso-Airbnb" element={<Airbnbinfo />} />
          <Route path="Prueba-de-usabilidad" element={<Telefoniainfo />} />
          <Route path="Rediseño-plataforma" element={<Formularioinfo />} />
          <Route path="Reconstrucción-app" element={<Hboinfo />} />
          <Route path="Bot-whatsapp" element={<Botinfo />} />
          <Route path="Juego-de-mesa" element={<JuegoPage />} />
          <Route path="Tipografia" element={<TipografiaPage />} />
          <Route path="TedxUMSA" element={<Tedxpage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
