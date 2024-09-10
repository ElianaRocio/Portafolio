
import tipo1 from '../../assets/images/tipo1.png';
import tipo2 from '../../assets/images/tipo2.png';
import tipo3 from '../../assets/images/tipo3.png';
import tipo4 from '../../assets/images/tipo4.png';
import tipo5 from '../../assets/images/tipo5.png'



/*<img src={img03} alt="img" className="img-fluid" width="500"/ >;*/
import { Link } from 'react-router-dom';
import Descripcion from '../../components/Descripcion/Descripcion';

let lugar = [
  {
    tiempo: 'Twin Stem',
  },
];

export default function TipografiaPage() {
  return (
    <div>
      <div className="container my-3">
        <h1 className="titulo2">Diseño de tipografía</h1>
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
                <strong>Cargo: </strong> Diseñadora gráfica
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-bezier icono2"></i>
                <strong>Funciones: </strong> Investigación, creación de concepto, diseño y
                estructuración de cajas altas, cajas bajas, símbolos y números.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-people-fill icono2"></i>
                <strong>Equipo: </strong> El proyecto se realizó de forma individual bajo
                supervisión.
              </p>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col">
              <p className="texto1"></p>
              <i class="bi bi-hourglass-bottom icono2"></i>
              <strong>Tiempo </strong>1 mes
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm">
              <p className="titulo6">Resúmen de proyecto</p>
              <p className="texto1">
                La fuente tipográfica “Twin Stem”, nace a raíz del propósito de ser compartida y
                difundida en libros de ciencias al estilo clásico y elegante, especialmente aquellos
                que combinan ilustraciones botánicas con gráficos detallados, lo que la diferencia
                es su doble asta y las curvas que le caracterizan.
              </p>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <p className="titulo6">Desarrollo de conceptos</p>
            <p className="texto1">
              <strong>Temática general:</strong> Libros
            </p>
            <p className="texto1">
              <strong>Temática específica:</strong>Libros de ciencia
            </p>
            <p className="texto1">
              <strong>Finalidad:</strong>Título de la portada
            </p>
          </div>

          <div className="row text-center d-flex align-items-end my-3">
            <div className="col">
              <img src={tipo4} alt="img" className="img-fluid" width="400" />
            </div>
            <div className="col">
              <img src={tipo5} alt="img" className="img-fluid" width="500" />
            </div>
          </div>
          <div className="row text-center my-2">
            <div className="col">
              <p className="texto1">
                <strong>
                  <small>Bocetos</small>
                </strong>
              </p>
            </div>
            <div className="col">
              <p className="texto1">
                <strong>
                <small>Referencias</small></strong>
              </p>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <p className="titulo6">Desarrollo del alfabeto</p>
            <p className="texto1">
              El nombre de la fuente tipográfica “Twin Stem” o “Asta gemela” recalca la principal
              característica de esta fuente, debido a que todas las letras, número y signos de
              puntuación poseen una asta adicional, de esta forma se hace la ilusión de que los
              carácteres poseen una asta gemela.
            </p>
            <p className="texto1">
              Twin Stem, pertenece a la clasificación San Serif y sub clasificación Humanísticas,
              pese a que tiene variaciones en sudiseño su estrutura básica es relacionada a esta
              clasificación y sub clasificación, tiene trazo uniforme y su peso es Light.
            </p>
            <p className="texto1">
              Esta clase de carácteres se pueden visualizar en libros botánicos que tienen una
              estetica visual basada en un estilo clásico.
            </p>
          </div>
          <div className="row my-3">
            <div className="col text-center">
              <img src={tipo1} alt="img" className="img-fluid" width="400" />
            </div>
            <div className="col text-center">
              <img src={tipo2} alt="img" className="img-fluid" width="400" />
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <p className="titulo6">Aplicación</p>
            <p className="texto1">
              A continuaciónn se mostrará ejemplos de como luciría la tipografía implementada
              siguiendo el concepto inicial.
            </p>
          </div>
          <div className="row">
            <div className="col text-center">
              <img src={tipo3} alt="img" className="img-fluid" width="400" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <p className="titulo6"></p>
            <p className="texto1"></p>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm my-3" style={{ textAlign: 'right' }}>
              <Link to="/Juego-de-mesa">
                {' '}
                <button className="btn btn-primary">Anterior</button>
              </Link>
            </div>
            <div className="col-sm my-3">
              <Link to="/TedxUMSA">
                {' '}
                <button className="btn btn-primary">Siguiente</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
