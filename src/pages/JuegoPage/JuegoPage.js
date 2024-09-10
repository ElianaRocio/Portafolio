
import j0 from '../../assets/images/j0.png';
import j1 from '../../assets/images/j1.png';
import j2 from '../../assets/images/j2.png';
import j3 from '../../assets/images/j3.png';
import j4 from '../../assets/images/j4.png';
import j5 from '../../assets/images/j5.png';
import j6 from '../../assets/images/j6.png';
import j7 from '../../assets/images/j7.png';
import j8 from '../../assets/images/j8.png';
import j9 from '../../assets/images/j9.png';
import Slider from '../../components/Slider/Slider';
  /*<img src={img03} alt="img" className="img-fluid" width="500" >;*/
import { Link } from 'react-router-dom';
import Descripcion from '../../components/Descripcion/Descripcion';

let lugar = [
  {
    tiempo: 'Choose Yourself',
  },
];

export default function JuegoPage() {
  return (
    <div>
      <div className="container my-3">
        <h1 className="titulo2">Juego de mesa</h1>
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
                estructuración de piezas gráficas.
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
              <p className="texto1">
                <i class="bi bi-hourglass-bottom icono2"></i>
                <strong>Tiempo </strong>2 semanas
              </p>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm">
              <p className="titulo6">Resúmen de proyecto</p>
              <p className="texto1">
                El objetivo del juego es promover la expresión de sentimientos y emociones de forma
                saludable a través de compartir vivencias y empatizar con los otros jugadores.
              </p>
            </div>
          </div>
          <Slider />

          <div className="row">
            <div className="col-sm">
              <p className="titulo6">¿Cómo se logra?</p>
              <p className="texto1">A través de tarjetas de emociones y puntos de empatía.</p>
              <p className="texto1">
                El jugador responde la pregunta guía, compartiendo una anécdota personal relacionada
                con la emoción. Después de que el jugador comparte su anécdota, los otros jugadores
                pueden hacer preguntas de seguimiento o comentarios constructivos para ganar puntos
                de empatía.
              </p>
              <div className="col-sm">
                <p className="titulo6">¿Cómo se juega?</p>
                <ol className="texto1">
                  <li className=""> Lanza el dado y avanza tu ficha.</li>
                  <li className="">Toma una tarjeta de emociones y lee en voz alta.</li>
                  <li className="">
                    Responde la pregunta compartiendo una anécdota personal. Los demás jugadores
                    pueden hacer preguntas o comentarios de apoyo.
                  </li>
                  <li className="">Gana puntos de empatía por compartir y por ofrecer apoyo.</li>
                  <li className="">
                    El juego termina cuando todos los jugadores llegan a la casilla final.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <p className="titulo6 text-center">Colores</p>
              <p className="texto1 text-center">
                Relacionando la tipografía Futura con la mente humana, podría decirse que transmite
                una sensación de claridad y orden mental. Sus formas geométricas y líneas limpias
                reflejan una mente organizada y enfocada.
              </p>
            </div>
            <div className="col-sm-4">
              <p className="titulo6 text-center">Tipografía</p>
              <p className="texto1 text-center">
                Son colores complementarios, los colores pasteles evocan tranquilidad y relajación.
                Son consideradas calmantes y, en muchas ocasiones, ayudan a recobrar la cordura.
                Adicionalmente, crean una sensación de sofisticación.
              </p>
            </div>
            <div className="col-sm-4">
              <p className="titulo6 text-center">Tablero</p>
              <p className="texto1 text-center">
                El tablero consta de una espiral de colores ya definidos, cada uno de ellos
                representa un sentimiento diferente, además se utiliza una técnica diferente a la
                numeral con el objetivo de que se perciba libertad de movimiento entre casillas de
                colores similares.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-sm-4">
              <img src={j5} alt="img" className="img-fluid" width="300"></img>
            </div>
            <div className="col-sm-4">
              <img src={j6} alt="img" className="img-fluid" width="300"></img>
            </div>
            <div className="col-sm-4">
              <img src={j7} alt="img" className="img-fluid" width="300"></img>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <p className="titulo6">Producto Final</p>
            <p className="texto1">
              El juego choose you nos ayuda a regular nuestras emociones, conocer mas de ellas y
              escuchar a los demás formando lazos a través de la empatía
            </p>
          </div>
          <div className="row">
            <div className="col">
              <img src={j8} alt="img" className="img-fluid" width="500"></img>
            </div>
            <div className="col">
              <img src={j9} alt="img" className="img-fluid" width="500"></img>
            </div>
            <div className="col">
              <img src={j0} alt="img" className="img-fluid" width="500"></img>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm my-3" style={{ textAlign: 'right' }}>
              <Link to="/">
                {' '}
                <button className="btn btn-primary">Home</button>
              </Link>
            </div>
            <div className="col-sm my-3">
              <Link to="/Tipografia">
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
