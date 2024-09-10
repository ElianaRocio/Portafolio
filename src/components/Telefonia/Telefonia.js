import Descripcion from "../Descripcion/Descripcion";
import ux3 from '../../assets/images/ux3.png';
import { Link} from 'react-router-dom';
export default function Telefonía() {

    let lugar2 = [
        {
            titulo: 'Telefonía móvil',
            texto: ' Entrevistas a usuarios que compran paquetes de telefonía móvil por medio de una app de banco para mejorar problemas de usabilidad',
            tiempo: 'Prueba de usabilidad',
       
        },
    ];
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-4 ">
            <img src={ux3} alt="ux3" className="img-fluid" width="300" />
          </div>
          <div className="col-sm">
            <div className="lugar2">
              {lugar2.map((descripcion, index) => {
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
            </div>
            <div className="row my-3 mx-1">
              <Link to="/Prueba-de-usabilidad">
                {' '}
                <button className="btn btn-secondary"> Más informacion</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}