import Table from '../../components/Table/Table';

import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img8 from '../../assets/images/img8.png';
import img01 from '../../assets/images/img01.png';

import { Link } from 'react-router-dom';

import Descripcion from '../../components/Descripcion/Descripcion';

let lugar = [
  {
    tiempo: 'Prueba de Usabilidad',
  },
];

export default function Telefoniainfo() {
  return (
    <div>
      <div className="container my-3">
        <h1 className="titulo2">Telefonía Móvil</h1>
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
                <strong>Funciones: </strong> Reclutamiento de personas, moderadora de entrvistas,
                arquitectura de la informacioón, evaluación experta y rediseño de página en figma.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-people-fill icono2"></i>
                <strong>Equipo: </strong> El proyecto se realizó en un equipo de 5 personas.
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
                    Disclaimer: Se modificaron y omitieron datos para mantener la confidencialidad
                    de las empresas a las que esta sujeto el estudio.
                  </strong>
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="row my-3 mx-3">
          <p className="titulo6">Resúmen de proyecto</p>
          <p className="texto1">
            Los objetivos que se tomaron en cuenta al momento de realizar la recarga, fueron:
          </p>
          <ul className="texto1 mx-3">
            <li>Evaluar la percepción de los usuarios.</li>
            <li>Determinar las emociones que experimentan los usuarios.</li>
            <li>
              Analizar la comprensión del contenido mostrado en las pantallas y evaluar si la
              cantidad de información es adecuada y comprensible.
            </li>
            <li>Identificar en que contextos los usuarios usan el servicio</li>
            <li>
              Evaluar su facilidad de uso y sus posibles dificultades de navegación en el flujo.
            </li>
            <li>Analizar la satisfacción de los usuarios con cada pantalla presentada.</li>
          </ul>

          <div className="row my-3">
            <h2 className="titulo6">Metodología</h2>
            <p className="texto1">
              Se realizó una prueba de usabilidad virtual en base a un protocolo preparado con las
              preguntas elaboradas según los objetivos propuestos, para ello se precisó de 5
              personas usuarias entre 18 a 25 años que utilicen la opción de recarga por medio de
              una app de banco. Posteriormente se consolidó la información a través de material
              audiovisual y escrito, por medio de notas registradas acerca de las opiniones y quotes
              de los usuarios, lo que permitió realizar el proceso de análisis.{' '}
            </p>
            <div className="row text-center">
              <img src={img01} alt="Notas usuarios" className="img-fluid" width="100" />
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-3">
        <table className="table table-secondary">
          <thead>
            <tr className="text-center">
              <td className="col tcos ">Tarea realizada por los usuarios</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="texto1">
                Explorar el prototipo con el objetivo de hacer una recarga de credito de un cierto
                monto a un número celular desde la app de banco.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container my-3">
        <div className="row">
          <div className="container my-3">
            <div className="row">
              <p className="texto1">
                A continuación se presenta un punto de mejora desglozado para el buen entendimiento
                de la forma de trabajo:{' '}
              </p>
              <p className="titulo6">Punto de mejora: </p>
              <p className="tcos">
                <strong>
                  A pesar de que el proceso de recargar credito genera emociones positivas por ser
                  claro y detallado, se percibe cierto grado de dificultad por algunos aspectos.
                </strong>
              </p>
              <p className="tituloa">
                {' '}
                <strong>Evidencia </strong>
              </p>
              <p className="texto1">
                4/5 participantes percibieron cierto grado de dificultad en el proceso. (P2, P3, P4,
                P5).
              </p>
              <p className="tituloa">
                <strong>Quote: </strong>{' '}
              </p>
              <p className="texto1">
                “no le doy el 5 porque pueden evitar algunas pantallas para que sea más rápido, más
                fácil. Tu no más le das en recargar, continuar y se acabó... También mucha gente es
                muy visual, evitar que tengas que meterle al dedo para ver otras opciones. ” -P3
              </p>
              <p className="tituloa">
                <strong>Sugerencia</strong>
              </p>
              <p className="texto1">
                Se recomienda redefinir la cantidad de pantallas para realizar el proceso de
                recarga. Revisar aspectos de guía de estilo, contrastes e interacciones
                convencionales para proporcionar una interfaz legible y precisa.
              </p>

              <p className="titulo6">Resultados</p>
              <p className="texto1">
                1. Los usuarios de la app de banco requieren recargar credito porque necesitan
                mantener su servicio activo y comunicarse con otros pero al buscar este servicio en
                la plataforma los usuarios presentan dificultad al encontrar la opción de recarga,
                por lo que pueden optar por otras opciones para cumplir con esta necesidad.
              </p>
              <p className="texto1">
                2. Los usuarios buscan realizar una recarga a través de la app de banco porque
                quieren ahorrar tiempo y conocer los detalles exactos de cada paquete pero oresentan
                cierta dificultad con la accesibilidad, la jerarquía visual y falta de opciones
                preestablecidad que agilicen el proceso.
              </p>
              <p className="texto1">
                3. Los usuarios buscan realizar una recarga a través de la app de banco porque
                quieren obtener estos beneficios de forma rápida, efectiva y con seguriad al
                sentirse respaldados por una institución bancaria pero cuentan con ciertas
                limitaciones como el acceso a la red e internet para la realización de este proceso
                al no contar con servicio
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <p className="titulo6">Conclusiones</p>
              <p className="texto1">
                Los hallazgos de la Prueba de Usabilidad son cruciales para lograr objetivos de
                negocio como: Incrementar el número de transacciones por la aplicación de BanCoppel,
                mejorar la experiencia del cliente, generar recurrencia en los canales digitales, y
                aumentar los ingresos a la empresa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm my-3" style={{ textAlign: 'right' }}>
            <Link to="/Caso-Airbnb">
              {' '}
              <button className="btn btn-primary">Anterior</button>
            </Link>
          </div>
          <div className="col-sm my-3">
            <Link to="/Rediseño-plataforma">
              {' '}
              <button className="btn btn-primary">Siguiente</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
