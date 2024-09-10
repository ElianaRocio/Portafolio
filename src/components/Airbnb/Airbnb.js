import Descripcion from "../Descripcion/Descripcion";
import ux2 from '../../assets/images/ux2.png';
import { Link} from 'react-router-dom';
export default function Airbnb() {
    let lugar1 = [
        {
            titulo: 'AirBnb',
            texto: 'Evaluación heurística de la plataforma de Airbnb, enfocándose en el flujo del proceso de reserva. Se identificaron oportunidades de mejora y soluciones que son cruciales para la facilidad de uso y para evitar que los usuarios abandonen el proceso de reserva.',
            tiempo: 'Evaluación experta',
           
        },
    ];
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-4">
            <img src={ux2} alt="ux2" className="img-fluid" width="300" />
          </div>
          <div className="col-sm">
            <div className="lugar1">
              {lugar1.map((descripcion, index) => {
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
            <div className="my-3 mx-3">
              <Link to="/Caso-Airbnb">
                {' '}
                <button className="btn btn-secondary"> Más informacion</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
