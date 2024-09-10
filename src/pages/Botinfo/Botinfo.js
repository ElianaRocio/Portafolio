import img21 from '../../assets/images/img21.png';
import img22 from '../../assets/images/img22.png';
import img23 from '../../assets/images/img23.png';
import img24 from '../../assets/images/img24.png';
import img25 from '../../assets/images/img25.png';
import img26 from '../../assets/images/img26.png';
import img27 from '../../assets/images/img27.png';

import { Link } from 'react-router-dom';
import Descripcion from '../../components/Descripcion/Descripcion';

let lugar = [
  {
    tiempo: 'Bot de Whatsapp ',
  },
];

export default function Botinfo() {
  return (
    <div>
      <div className="container my-3">
        <h1 className="titulo2">UX Writting</h1>
        <div className="col-sm">
          <div className="lugar">
            {lugar.map((descripcion, index) => {
              return (
                <Descripcion
                  key={index}
                  texto={descripcion.texto}
                  tiempo={descripcion.tiempo}
                  precio={descripcion.precio}
                  costo={descripcion.costo}
                ></Descripcion>
              );
            })}
          </div>
        </div>

        <div className="container mx-3">
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-briefcase-fill icono2"></i>
                <strong>Cargo: </strong> UX Design Researcher
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-bezier icono2"></i>
                <strong>Funciones: </strong> Arquitectura de la información, diseño y armado de
                prototipo en Figma, identificaciónde puntos de mejora enlas pruebas de usabilidad,
                reclutamiento y moderación de las pruebas.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-people-fill icono2"></i>
                <strong>Equipo: </strong> El proyecto se realizó en un equipo de 2 personas.
              </p>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-hourglass-bottom icono2"></i>
                <strong>Tiempo </strong>1 semana
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <small>
                  <i class="bi bi-exclamation-triangle icono2"></i>
                  <strong>
                    Disclaimer: Para mantener la confidencialidad se modificaron datos de la empresa
                    original
                  </strong>
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm">
              <p className="titulo6">Resúmen de proyecto</p>
              <p className="texto1">
                Se realizó una evaluación de UX Writing para un bot de WhatsApp diseñado para
                facilitar el acceso a préstamos bancarios. Para ello se hizo uso de una prueba de
                usabilidad a 5 personas, en la cuál se identificó problemas significativos en la
                comprensión de los textos del bot.{' '}
              </p>
              <p className="titulo6">Metodología</p>
              <p className="texto1">
                Para ello se hizo uso de una prueba de usabilidad a 5 personas, en la cuál se
                identificó problemas significativos en la comprensión de los textos del bot.
              </p>
              <p className="titulo6">Resultado</p>
              <p className="texto1">
                {' '}
                A partir de estos hallazgos, se llevó a cabo un exhaustivo proceso de rediseño
                centrado en mejorar la claridad y efectividad del contenido. El resultado de este
                esfuerzo es el prototipo final del bot de WhatsApp, que ahora presenta un diseño
                optimizado para una comunicación más clara y eficiente. A continuación, se muestra
                el prototipo final del rediseño de UX Writing.
              </p>
              <p className="texto1">
                {' '}
                A partir de estos hallazgos, se llevó a cabo un exhaustivo proceso de rediseño
                centrado en mejorar la claridad y efectividad del contenido. El resultado de este
                esfuerzo es el prototipo final del bot de WhatsApp, que ahora presenta un diseño
                optimizado para una comunicación más clara y eficiente. A continuación, se muestra
                el prototipo final del rediseño de UX Writing.
              </p>
              <p className="tituloa">
                <a href="https://www.figma.com/proto/0f4XS9d7VzslQf33mUrkDe/Chatbot-Whatsapp?node-id=82-10357&node-type=FRAME&t=OuMd610B9wtS773y-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8986&starting-point-node-id=82%3A10357">
                  Ver prototipo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <div className="col-sm my-3" style={{ textAlign: 'right' }}>
            <Link to="/Reconstrucción-app">
              {' '}
              <button className="btn btn-primary">Anterior</button>
            </Link>
          </div>
          <div className="col-sm my-3">
            <Link to="/">
              {' '}
              <button className="btn btn-primary">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
