import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img8 from '../../assets/images/img8.png';
import img9 from '../../assets/images/img9.png';
import { Link } from 'react-router-dom';

import Descripcion from '../../components/Descripcion/Descripcion';

let lugar = [
  {
    tiempo: 'Evaluación Heurística',
  },
];

export default function Airbnbinfo() {
  return (
    <div>
      <div className="container my-3">
        <h1 className="titulo2">Airbnb</h1>
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
                <strong>Funciones: </strong> Arquitectura de la información, evaluación experta y
                rediseño de página.
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
                <strong>Tiempo </strong>2 semanas
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <small>
                  <i class="bi bi-exclamation-triangle icono2"></i>
                  <strong>
                    Disclaimer: El proyecto pertenece a un caso de estudio independiente a la
                    empresa AirBnb realizada con fines investigativos y no con fines comerciales.
                  </strong>
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="row my-3 mx-3">
          <h2 className="titulo6">Resúmen de proyecto</h2>
          <p className="texto1">
            Se realizó una evaluación experta a la plataforma de Airbnb que es un sitio web donde
            las personas pueden alquilar sus casas o habitaciones a otros que buscan alojamiento.
            Además, en diversas ocasiones, ha sido reconocida como una de las empresas más
            innovadoras del mundo en listas como las de la revista Fast Company y Forbes. En la
            evaluación, nos enfocamos en el flujo del proceso de reserva de un alojamiento para un
            lugar, un número de personas y días determinados. Como resultado identificamos
            oportunidades de mejora y sus respectivas soluciones, tienen alta relevancia porque
            estas podrían afectar la facilidad del uso de la plataforma y por ende, la capacidad del
            usuario para completar tareas en ella, incluso podrían ocasionar el abandono del proceso
            de reserva.
          </p>
          <h2 className="titulo6">Metodología</h2>
          <p className="texto1">
            Con el fin de dar a conocer las áreas de oportunidad referentes a usabilidad,
            correspondientes al flujo del proceso de reserva de hospedaje en el sitio web de Airbnb,
            se ha llevado a cabo una “Evaluación Experta”, proceso distribuido en cinco fases, las
            cuales se explican a continuación.
          </p>
          <div className="row my-3 ">
            <div className="col-sm my-3">
              <p className="texto1 ">
                {' '}
                Comenzamos por explorar la aplicación de Airbnb, continuando por realizar una
                evaluación individual y otra grupal, ambas con base a los parámetros de Heurísticas
                y leyes establecidas en el ámbito de la usabilidad, lo que también incluye el Diseño
                Visual y la forma de comunicar ideas a través de los textos empleados en el flujo.
                Posteriormente se discutieron los hallazgos encontrados, para clasificarlos con base
                en la Escala de Severidad planteada por David Travis (2009). Este método permite
                identificar aquellas áreas en las que se necesita poner especial atención, pues el
                impacto en el usuario es significativo. Finalmente se buscaron referentes de
                plataformas web que aplican las buenas prácticas que se proponen como solución a los
                puntos de mejora.{' '}
              </p>
            </div>
            <div className="col-sm my-3 text-center">
              <img src={img6} alt="Disney3" className="img-fluid" width="300" />
              <p className="texto1">
                <small>5 fases de evaluación</small>{' '}
              </p>
            </div>
            <p className="texto1">
              Se identificaron 10 hallazgos de los cuales actontinuación se desglosa un punto de
              mejora y una buena práctica para un mejor entendimiento.
            </p>
          </div>
        </div>
      </div>

      <div className="container m-x3 my-3">
        <div className="row mx-3">
          <p className="tcos">
            <strong>
              Punto de mejora: El impuesto no es visible hasta el que haces la reserva, generando
              desconfianza.
            </strong>
          </p>
          <p className="tituloa">
            <strong>Severidad: </strong>Crítico
          </p>
          <p className="tituloa">Observación</p>
          <p className="texto1">
            Al revisar los precios de una habitación no se contemplan los impuestos pero cuando
            realizas la reservación obtienes el precio más impuestos, el obtener dos precios
            diferentes especialmente que el monto final sea mucho mayor que el monto inicial causa
            confusión y desconfianza.
          </p>
          <p className="tituloa">Justificación</p>
          <p className="texto1">
            Según el principio Anticipación presentado por Bruce Tognazzini (2014), nos indica que
            “Se debe brindar toda la información y herramientas necesarias al usuario durante el
            proceso, anticipando deseos y necesidades”, por este motivo es necesario presentar en
            todo momentoal usuario el costo total más impuestos.{' '}
          </p>

          <p className="tituloa">Sugerencia</p>
          <p className="texto1">
            Se sugiere mostrar el mismo precio en todo momento, incluir el precio de los impuestos
            desde el inicio y especificar cuál es su monto exacto, además de especificar el monto
            preciso para cada elemento presentado.{' '}
          </p>
        </div>

        <div className="row text-center">
          <div className="col-sm">
            <img src={img7} alt="Disney2" className="img-fluid" width="500" />
          </div>
          <div className="col-sm">
            <img src={img8} alt="Disney2" className="img-fluid" width="500" />
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <p className="tcos">
            <strong>
              Buena práctica: Fechas de llegada y salida del hospedaje son útiles y fáciles de
              entender. La interacción es accesible.
            </strong>
          </p>
          <p className="tituloa">Observación</p>
          <p className="texto1">
            Después de seleccionar el destino, automáticamente se abre la pestaña para ingresar las
            fechas de la estadía, la visualización es muy agradable, fácil de entender, botones
            claros y muy similar a un calendario común.
          </p>
          <p className="tituloa">Justificación</p>
          <p className="texto1">
            La gente crea modelos mentales sobre una tarea o cómo debe lucir un objeto y para que el
            uso de una interfaz sea exitoso, el modelo propuesto en el sitio web debe coincidir con
            el de las personas, esto lo dijo la psicóloga y científica cognitiva Weinschenk (2010) y
            un ejemplo de ello es la forma en como podemos observar que el diseño propuesto, se hace
            muy intuitivo agradable y similar a otros modelos de fechas. Esta idea también es
            apoyada por Mayhew (1999) en el principio de Familiaridad “un sistema que resulte
            familiar al usuario por presentar similitudes con un sistema anterior será más fácil de
            utilizar”
          </p>
        </div>

        <div className="row text-center">
          <div className="col-sm">
            <img src={img9} alt="img" className="img-fluid" width="500" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h2 className="titulo6">Conclusiones</h2>
          <p className="texto1">
            La plataforma de AirBnb cuenta con servicios únicoos y destacables, sin embargo también
            se encontraron áreas de mejora entorno a las leyes de usabilidad y las heurísticas que
            podrñian limitar la navegación de la plataforma por parte de los usuarios e incrementar
            la tas de abandono.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm my-3" style={{ textAlign: 'right' }}>
            <Link to="/evaluacion-comparativa">
              {' '}
              <button className="btn btn-primary">Anterior</button>
            </Link>
          </div>
          <div className="col-sm my-3">
            <Link to="/Prueba-de-usabilidad">
              {' '}
              <button className="btn btn-primary">Siguiente</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
