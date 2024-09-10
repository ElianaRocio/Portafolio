import tedx2 from '../../assets/images/tedx2.png';
import Slider from '../../components/Slider/Slider';
/*<img src={img03} alt="img" className="img-fluid" width="500" >;*/
import { Link } from 'react-router-dom';
import Descripcion from '../../components/Descripcion/Descripcion';

let lugar = [
  {
    tiempo: 'TEDx UMSA',
  },
];

export default function Tedxpage() {
  return (
    <div>
      <div className="container my-3">
        <h1 className="titulo2">Línea gráfica y material gráfico</h1>
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
                <strong>Cargo: </strong> Líder de equipo
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-bezier icono2"></i>
                <strong>Funciones: </strong> Uso de metodologías ágiles para generación de contenido
                y trabajo en equipo, diseñar línea gráfica, manual de marca y conceptos.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-people-fill icono2"></i>
                <strong>Equipo: </strong> 8 personas
              </p>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-hourglass-bottom icono2"></i>
                <strong>Tiempo </strong>10 meses
              </p>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm">
              <p className="titulo6">Resúmen de proyecto</p>
              <p className="texto1">
                Cada año se modifica la línea gráfica de TEDx UMSA para que vaya acorde a la
                temática del año. La temática de este es la creatividad por lo que toda la líne
                gráfica va entorno a ella y también los elementos gráficos.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
             
              <p className="titulo6">¿Qúe es TEDxUMSA?</p>
              <p className="texto1">
                TEDx UMSA es un evento independiente organizado bajo la licencia TED en la
                Universidad Mayor de San Andrés (UMSA), Bolivia. TEDx sigue el espíritu de las
                conferencias TED, que tienen como objetivo compartir ideas innovadoras y valiosas en
                diversas áreas, pero está organizado de manera independiente para abordar temas
                relevantes a la comunidad local.
              </p>
              <div className="col-sm">
                <p className="titulo6">¿Qué trabajo se realizó?</p>
                <p className="texto1">
                  Para la creación de los logos de TEDx UMSA, me enfoqué en desarrollar una
                  identidad visual que reflejara la temática central de este año: la creatividad.
                  Inspirándome en los "doodles", utilicé líneas dinámicas y elementos espontáneos
                  que capturan la esencia de la imaginación y la expresión libre. Cada logo de las
                  distintas áreas del evento sigue esta línea gráfica, manteniendo coherencia visual
                  y adaptándose a las particularidades de cada área. Este enfoque refuerza la idea
                  de que la creatividad está presente en todos los aspectos del evento.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              <img src={tedx2} alt="img" className="img-fluid" width="500"></img>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm my-3" style={{ textAlign: 'right' }}>
              <Link to="/Tipografia">
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
    </div>
  );
}
