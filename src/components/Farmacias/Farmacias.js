import Descripcion from "../Descripcion/Descripcion"; 
import ux1 from '../../assets/images/ux1.png';

import { Link} from 'react-router-dom';

export default function Farmacias() {

    let lugar = [
        {
            titulo: 'Evaluación comparativa',
            texto: 'Evaluación experta realizada a los planes de lealtad de dos farmacias para identificar buenas prácticas y puntos de mejora en la experiencia de usuario, al interactuar con sus aplicaciones móviles.',
            tiempo: 'Caso de estudio',
            
        },
    ];
    return (
      <div className="container my-3">
        <div className="row">
          
          <div className="col-sm-4 ">
            <img src={ux1} alt="ux1" className="img-fluid" width="300" />
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
              <Link to="/evaluacion-comparativa">
                {' '}
                <button className="btn btn-secondary"> Más informacion</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

}