import Descripcion from '../Descripcion/Descripcion';

import juego from '../../assets/images/juego.png';

import { Link } from 'react-router-dom';

export default function Juegomesa() {
  let lugar = [
    {
      titulo: 'Choose yourself',
      texto:
        'Diseño e implementación de un juego de mesa con el objetivo de fomentar la expresión de emociones en personas de 15 a 25 años. El proyecto incluye el diseño completo del tablero, las piezas y las cartas, para crear una experiencia lúdica que promueva la conciencia emocional',
      tiempo: 'Juego de mesa',
    },
  ];
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-4 ">
          <img src={juego} alt="ux1" className="img-fluid" width="300" />
        </div>
        <div className="col-sm">
          <div className="lugar">
            {lugar.map((descripcion, index) => {
              return (
                <Descripcion
                  key={index}
                  titulo={descripcion.titulo}
                  texto={descripcion.texto}
                  tiempo={descripcion.tiempo}
                ></Descripcion>
              );
            })}
          </div>
          <div className="my-3 mx-3">
            <Link to="/Juego-de-mesa">
              {' '}
              <button className="btn btn-secondary"> Más informacion</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
