import Descripcion from '../Descripcion/Descripcion';
import tedx1 from '../../assets/images/tedx1.png';

import juego from '../../assets/images/juego.png';

import { Link } from 'react-router-dom';

export default function Tedxumsa() {
  let lugar = [
    {
      titulo: 'TEDxUMSA',
      texto:
        'Desarrollé la imagen y el diseño de marca de TEDx UMSA, enfocándome en transmitir la identidad única del evento a través de visuales creativos y consistentes, desde la creación del logotipo hasta la aplicación en diversos medios.',
      tiempo: 'Diseño de imágenes de marca',
    },
  ];
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-4 ">
          <img src={tedx1} alt="ux1" className="img-fluid" width="300" />
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
            <Link to="/Tedxumsa">
              {' '}
              <button className="btn btn-secondary"> Más informacion</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
