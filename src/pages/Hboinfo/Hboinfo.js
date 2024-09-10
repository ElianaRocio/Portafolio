import img21 from '../../assets/images/img21.png'; 
import img22 from '../../assets/images/img22.png'; 
import img23 from '../../assets/images/img23.png'; 
import img24 from '../../assets/images/img24.png'; 
import img25 from '../../assets/images/img25.png'; 
import img26 from '../../assets/images/img26.png'; 
import img27 from '../../assets/images/img27.png'; 
 
import { Link} from 'react-router-dom';
import Descripcion from "../../components/Descripcion/Descripcion";


let lugar = [
    {        
        tiempo: 'HBO MAX '
    },
];

export default function Hboinfo() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="titulo2">Reconstrucción aplicación móvil</h1>
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
                  <strong>Funciones: </strong> Arquitectura de la información, evaluación experta,
                  cardsorting en figjam y rediseño de página en figma.
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
                      Disclaimer: Este fue un caso de estudio independiente no perteneciente a la
                      empresa HBOMAX, únicamente con fines investigativos y no comerciales.
                    </strong>
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="container my-3">
            <div className="row">
              <div className="col-sm">
                <p className="texto1">
                  <p className="titulo6">Resúmen de proyecto</p>
                  Para un mejor entendimiento del diseño de una app de streaming se hizo un caso de
                  estudio con la finalidad de reconstruirla partiendo del sistema de diseño, la
                  creación de componentes y el armado de pantallas.
                </p>
                <p className="titulo6">Guía de estilo</p>
              </div>
            </div>
          </div>

          <div className="container ">
            <div className="row">
              <div className="col-sm">
                <p className="tcos text-center">Colores</p>
                <p className="texto1" style={{ textAlign: 'justify' }}>
                  Se determinaron los colores primarios, secundarios y complementarios usados a lo
                  largo del flujo y se guardaron en la opción de estilos de colores en las carpetas
                  correspondientes para que su uso en el diseño sea más facil de acceder.{' '}
                </p>
                <div className="text-center">
                  <img src={img21} alt="img" className="img-fluid" width="300" />
                </div>
              </div>
              <div className="col-sm ">
                <p className="tcos text-center">Tipografía</p>
                <p className="texto1 " style={{ textAlign: 'justify' }}>
                  Se determinó la tipografía que se iba a utilizar, además de la jerarquía existente
                  tanto en el heading como body, estableciendo diferentes tamaños y familias. Una
                  vez realizada esta acción se guardaron en los estilos tipográficos para usarlos a
                  lo largo del flujo para que no existan inconsistencias.
                </p>
                <div className="text-center">
                  <img src={img22} alt="img" className="img-fluid" width="200" />
                </div>
              </div>
              <div className="col-sm text-center">
                <p className="tcos">Iconos y logotipos</p>
                <p className="texto1" style={{ textAlign: 'justify' }}>
                  Se determinó los logotipos e iconos que se utilizana lo largo de la app, se
                  unificaron tamaños utilizando 24 px, siguiendo la regla del 8 y se guardaron como
                  componentes en una misma carpeta para que sea más fácil cambiar entre ellos cuando
                  asi sea conveniente.
                </p>
                <div className="text-center">
                  <img src={img23} alt="img" className="img-fluid" width="300" />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col">
                <p className="titulo6 text-center">Componentes</p>
                <p className="texto1">
                  Una vez que contamos con todos los componentes necesarios, con ayuda del
                  autolayout armamos la pantalla especificando el espacio entre elementos y el
                  tamaño de padding, así mismo si es necesario modificar los constraints y añadir
                  layers.{' '}
                </p>
                <div className="row">
                  <div className="col-sm">
                    <img src={img24} alt="img" className="img-fluid" width="150" />
                  </div>
                  <div className="col-sm">
                    <img src={img25} alt="img" className="img-fluid" width="150" />
                  </div>
                  <div className="col-sm">
                    <img src={img26} alt="img" className="img-fluid" width="150" />
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <p className="titulo6 text-center">Construcción app</p>
                <p className="texto1">
                  Una vez que contamos con todos los componentes necesarios, con ayuda del
                  autolayout armamos la pantalla especificando el espacio entre elementos y el
                  tamaño de padding, así mismo si es necesario modificar los constraints y añadir
                  layers.{' '}
                </p>
                <div className="text-center">
                  <img src={img27} alt="img" className="img-fluid" width="150" />
                </div>
              </div>
            </div>
          </div>

          <div className="container my-3">
            <p className="titulo6">Conclusiones</p>
            <p className="texto1">
              Reconstruir apps en Figma es una práctica valiosa porque permite comprender a fondo
              los principios de diseño que guían la creación de interfaces exitosas. Al replicar
              diseños existentes, se perfeccionan habilidades técnicas en Figma y se desarrolla un
              ojo crítico para la usabilidad y la estética. Además, esta práctica facilita la
              exploración de mejoras y ajustes, fomentando una mentalidad de diseño iterativo que es
              esencial en el desarrollo de soluciones innovadoras y centradas en el usuario
            </p>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm my-3" style={{ textAlign: 'right' }}>
              <Link to="/Rediseño-plataforma">
                {' '}
                <button className="btn btn-primary">Anterior</button>
              </Link>
            </div>
            <div className="col-sm my-3">
              <Link to="/Bot-whatsapp">
                {' '}
                <button className="btn btn-primary">Siguiente</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

}