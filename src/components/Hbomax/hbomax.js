import Descripcion from "../Descripcion/Descripcion";
import ux5 from '../../assets/images/ux5.png';

import { Link} from 'react-router-dom';
export default function Hbomax() {

    let lugar3 = [
        {
            titulo: 'HBO MAX',
            texto: ' Reconstrucción de aplicación móvil para explorar sistemas de diseño y oportunidades de mejora',
            tiempo: 'Reconstrucción app',
           
        },
    ];

    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-4 ">
            <img src={ux5} alt="ux5" className="img-fluid" width="300" />
          </div>
          <div className="col-sm">
            <div className="lugar3">
              {lugar3.map((descripcion, index) => {
                return (
                  <Descripcion
                    key={index}
                    titulo={descripcion.titulo}
                    texto={descripcion.texto}
                    tiempo={descripcion.tiempo}
                    precio={descripcion.precio}
                    costo={descripcion.costo}
                  ></Descripcion>
                );
              })}

              <div className="my-3 mx-3">
                <Link to="/Reconstrucción-app">
                  {' '}
                  <button className="btn btn-secondary"> Más informacion</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}