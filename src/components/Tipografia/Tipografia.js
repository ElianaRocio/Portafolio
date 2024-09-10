import Descripcion from '../Descripcion/Descripcion';

import tipo from '../../assets/images/tipo.png';

import { Link } from 'react-router-dom';

export default function Tipografia() {
  let lugar = [
    {
      titulo: 'Twin Stem',
      texto:
        'Diseño e implementación de una nueva tipografía para libros de ciencia y tecnología',
      tiempo: 'Diseño de tipografía',
    },
  ];
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-4 ">
          <img src={tipo} alt="ux1" className="img-fluid" width="300" />
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
            <Link to="/Tipografia">
              {' '}
              <button className="btn btn-secondary"> Más informacion</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
