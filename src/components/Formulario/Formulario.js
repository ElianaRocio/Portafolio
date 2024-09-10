import Descripcion from "../Descripcion/Descripcion";
import ux4 from '../../assets/images/ux4.png';
import { Link} from 'react-router-dom';
export default function Formulario() {

    let lugar3 = [
        {
            titulo: 'Formulario de registro',
            texto: ' Rediseño de prototitpo de alta fidelidad de registro de datos corrigiendo problemas de usabilidad y legibilidad.',
            tiempo: 'Rediseño de plataforma',
           
        },
    ];

    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-4 ">
            <img src={ux4} alt="ux4" className="img-fluid" width="300" />
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
                <Link to="/Rediseño-plataforma">
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