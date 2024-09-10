import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import { Link } from 'react-router-dom';

import Descripcion from '../../components/Descripcion/Descripcion';

let lugar = [
  {
    tiempo: 'Caso de estudio',
  },
];

export default function Info1Page() {
  return (
    <div>
      <div className="container my-3">
        <h1 className="titulo2">Evaluación comparativa</h1>
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
                <strong>Equipo: </strong> El proyecto se realizó en un equipo de 5 personas.
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
                    Disclaimer: Se modificaron y omitieron datos para mantener la confidencialidad
                    de las empresas a las que esta sujeto el estudio
                  </strong>
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="row my-3 mx-3">
          <h2 className="titulo6">Resúmen del proyecto</h2>
          <p className="texto1 ">
            La evaluación comparativa se llevó a cabo con el objetivo de identificar los aciertos y
            puntos de mejora de los planes de lealtad de dos farmacias. Para realizar la evaluacion
            experta se analizaron sus aplicaciones móviles, para ello se tomó en cuenta aspectos
            como el valor percibido, servicio al cliente, proceso de compra y facilidad de uso.
          </p>

          <h2 className="titulo6">Objetivo de investigacion</h2>
          <p className="texto1">
            Como punto de partida se determinaron objetivos de las farmacias al incluir los planes
            de lealtdad en su aplicación móvil y los objetivos de investigación, los cuáles son:{' '}
          </p>

          <ul className="texto1 ">
            <li className="mx-3">
              Identificar obstáculos y beneficios que tienen el plan de lealtad.
            </li>
            <li className="mx-3">
              Encontrar las áreas de oportunidad de la aplicación durante y después del proceso de
              compra.
            </li>
            <li className="mx-3">
              Descubrir las complicaciones de comunicación que tiene el cliente durante el proceso
              de compra y uso del plan de lealtad.
            </li>
          </ul>
        </div>

        <div className="row my-3 mx-3">
          <h2 className="titulo6">Metodología y proceso</h2>

          <div className="row my-3 ">
            <p className="texto1 ">
              {' '}
              1. Recolección de información acerca de los planes de lealtad de ambas farmacias,
              incluyendo las percepciones que tienen los usuarios en cuanto a los beneficios y
              dificultades al interactuar con las plataformas y al reclamar los beneficios de los
              planes de lealtad. En esta etapa se definieron los objetivos de negocio de lo que se
              determino:{' '}
            </p>
            <div className="row my-1 ">
              <div className="col-sm  ">
                <p className="texto1">
                  <strong>Farmacia 1: </strong>Establece que por cada compra que se realice de
                  productos participantes se obtendrá dinero electrónico con el cual,
                  posteriormente, se podrá comprar cualquier producto dentro de la farmacia, en
                  cualquier sucursal. Además tiene otros beneficios como descuentos en
                  establecimientos afiliados al programa de Monedero del Ahorro.
                </p>
                <p className="texto1">
                  <strong>Farmacia 2: </strong>Establece que se recibe producto gratis al acumular
                  determinada cantidad de compras en los artículos participantes. Cuando completas
                  la mecánica del producto se puede ver reflejado el beneficio al finalizar la
                  compra.
                </p>
              </div>
              <div className="col-sm text-center">
                <img src={img1} alt="Disney3" className="img-fluid" width="400" />
                <p className="texto1">
                  <small>Proceso de Cardsorting</small>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-3 ">
          <div className="row">
            <div className="col-sm my-3">
              <p className="texto1 mx-3">
                2. Identificación de la dificultad de los pasos de compra por la app móvil, así como
                la motivación de los usuarios al usar los planes de lealtad, para ello se tomaron en
                cuenta 3 momentos clave y criterios de comparación.{' '}
              </p>
            </div>
          </div>
          <div className="row my-3 text-center mx-3">
            <div className="col-sm my-3">
              <p className="tituloa">Momentos clave</p>
              <img src={img2} alt="Disney1" className="img-fluid" width="500" />
            </div>
            <div className="col-sm my-3 text-center">
              <p className="tituloa">Criterios comparación</p>
              <img src={img3} alt="Disney2" className="img-fluid" width="150" />
            </div>
          </div>
        </div>

        <div className="container my-3 ">
          <div className="row">
            <div className="col-sm my-3">
              <p className="texto1 mx-3">
                3. A partir de ello se determinaron los hallazgos que se clasificaron como Aciertos
                ( buenas prácticas dentro del proceso de interacción ) y puntos de mejora (Malas
                prácticas que afectan negativamente al usuario). Ambos se evaluaron con un nivel de
                severidad y se acompañan de buenas prácticas de otros productos digitales.{' '}
              </p>
              <p className="texto1 mx-3">
                Para cada punto de mejora, se detallo cuál es el problema y las consecuencias que
                ocurrirá si no se lo corrige además de indicar el nivel en la escala de severidad de
                David Travis. También se presenta una justificación con base en las herísticas y
                leyes de usabilidad, al igual que una suf¡gerencia de plataformas con buenas
                prácticas.
              </p>
              <p className="texto1 mx-3">
                Al ser una prueba comparativa se realizó el proceso para ambas farmacias, a
                continuación se presenta el desgloce de un hallazgo:
              </p>
              <p className="tcos mx-3">
                <strong>
                  Punto de mejora: Dificultades para resolver inconvenientes y hacer seguimiento de
                  los mismos.
                </strong>
              </p>
              <div className="row text-center mx-3">
                <div className="col-sm my-3">
                  <img src={img5} alt="Disney2" className="img-fluid" width="800" />
                </div>
              </div>
            </div>
            <div className="row">
              <p className="tituloa">
                <strong>Fundamento </strong>
              </p>
              <p className="texto1">
                De acuerdo a lo expuesto en el artículo “The New Ecommerce User Experience” de NN
                Group, los usuarios esperan en el servicio de atención al cliente múltiples formas
                de obtener ayuda cuando la necesitan, ya que deben poder elegir el canal que mejor
                se adapte a su situación. Los usuarios tienen diferentes necesidades y niveles de
                urgencia para sus problemas, por lo que la opción de hacer un reclamo rapido y poder
                hacer seguimiento del mismo contribuye a disminuir la frustracion de las personas
                usuarias.
              </p>
            </div>
            <div className="row">
              <div className="col-sm my-3">
                <p className="tituloa">
                  <strong>Sugerencia</strong>
                </p>
                <p className="texto1">
                  Se recomienda disponer de un canal personalizado dentro de la aplicación para
                  solventar los inconvenientes que las personas usuarias puedan tener antes, durante
                  y despues de su compra. Esto contribuira a que la satisfaccion del cliente
                  aumente, a la hora de tener que resolver un problema de una manera mas efectiva.
                </p>
              </div>
              <div className="col-sm my-3 text-center">
                <img src={img4} alt="Disney2" className="img-fluid" width="150" />
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <h2 className="titulo6">Resultados</h2>
            <p className="texto1">
              En ambas aplicaciones se encontraron dificultades para resolver inconvenientes y hacer
              seguimiento de los mismos lo que afecta la efectividad y la satisfacción del cliente.
              La mejora en este ámbito es esencial para adaptarse a las expectativas digitales de
              las personas usuarias.
            </p>
            <p className="texto1">
              Es de suma importancia brindar retroalimentación acerca de la disponibilidad o
              vigencia de productos así mismo ambas aplicaciones deben contar con los catálogos
              actualizados y determinar la fecha de caducidad de canje de estos productos, para de
              esta manera generar certeza de conocimiento a los usuarios.
            </p>
            <p className="texto1">
              <strong>Farmacia 1:</strong>Se percibe ambigüedad e insatisfacción por cambios en los
              términos y condiciones de los beneficios.{' '}
            </p>
            <p className="texto1">
              <strong>Farmacia 2: </strong>Se otorga una mejor claridad en todos los aspectos de
              información. se observa visibilidad y cumplimiento de los beneficios para sus
              clientes.
            </p>
          </div>
          <div className="row">
            <h2 className="titulo6">Conclusiones</h2>
            <p className="texto1">
              La pruebas comparativas nos permiten investigar a fondo la interacción que existe
              entre dos negocios del mismo rubro para identificar puntos de mejora y buenas
              prácticas de cada uno, para si visualizar fortalezas y debilidades para asi dar
              soluciones a los problemas de usabilidad presentados por las aplicaciones móviles. En
              este caso se concluye que ambas aplicaciones tienen dificultades con la comunicación
              de información y beneficios de los planes de lealtad, así como inconsistencias en su
              aplicación y disfrute. Es esencial comprender cómo esto afecta a los usuarios para
              implementar mejoras y lograr una interacción más eficiente con el producto.
            </p>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-sm my-3" style={{ textAlign: 'right' }}>
              <Link to="/">
                {' '}
                <button className="btn btn-primary">Home</button>
              </Link>
            </div>
            <div className="col-sm my-3">
              <Link to="/Caso-Airbnb">
                {' '}
                <button className="btn btn-primary"> Siguiente</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
