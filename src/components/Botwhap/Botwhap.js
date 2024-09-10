import Descripcion from "../Descripcion/Descripcion";
import ux6 from '../../assets/images/ux6.png';
import { Link} from 'react-router-dom';
export default function Botwhap() {

    let lugar3 = [
        {
            titulo: 'Bot whatsapp',
            texto: ' Prueba de usabilidad para evaluar la comprensión de textos de un flujo para facilitar el acceso a préstamos bancarios por medio de un bot. ',
            tiempo: 'Ux Writting',
           
        },
    ];

    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-4 ">
            <img src={ux6} alt="ux6" className="img-fluid" width="300" />
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
                <Link to="/Bot-whatsapp">
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