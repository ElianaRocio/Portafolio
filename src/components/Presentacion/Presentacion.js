import eli1 from '../../assets/images/eli1.png';
import eli2 from '../../assets/images/eli2.png';

export default function Presentacion() {
  return (
    <>
      <div className="container text-center my-3">
        <div className="card mb-3" style={{ maxWidth: '1500px' }}>
          <div className="row justify-content-center g-0" style={{ rowGap: '0px' }}>
            <div className="col-md-5 d-flex justify-content-center">
              <img src={eli1} alt="Eliana" className="img-fluid" width="400" />
            </div>
            <div className="col-md-7 text-start d-flex align-items-center my-3">
              <div className="card-body">
                <p className="texto1 ">
                  <strong>Hola, soy</strong>
                </p>
                <h5 className="card-title titulo2 mx-3">Eliana Murillo</h5>
                <p className="card-text tcos mx-3">UX/UI Design Researcher</p>
                <p className="card-text tcos mx-3">Graphic Designer</p>
                <p className="card-text tcos mx-3">Front End Developer</p>
                <div className="row mx-2">
                  <a href="https://drive.google.com/file/d/1L_kVaAivzmLzUYUvlYyFyVYzm5Ctuw3I/view?usp=drive_link">
                    <button className="btn btn-secondary">Ver más</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-3 ">
        <div className="card mb-3" style={{ maxWidth: '1500px' }}>
          <div className="row justify-content-center g-0">
            <div className="col-md text-start d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title titulo2">About me</h5>
                <p className="card-text texto1 mx-3 text-justify">
                  UX Design Researcher acreditada por la empresa Mexicana sperientia studio + lab
                  especialista en investigación cualitativa y cuantitativa y UX/UI para el rediseño
                  de plataformas. Diseñadora gráfica experta en creación de imágenes digitales.
                  Front end developer con experiencia en React para la implementación de interfaces
                  interactivas. Estudiante embajador de Microsoft en el Hito de gold, líder y
                  fundadora de la comunidad Bolivian Microsoft Girls, Google Women Techmaker
                  Ambassador, líder del área de diseño de TEDx UMSA. Estudiante de la carrera de
                  diseño gráfico, Disertadora y mentora en el área de desarrollo web y Ux/UI en
                  diferentes comunidades.
                </p>
                <div className="row">
                  <div className="col text-center mx-3">
                    <a href="https://wa.me/62423144">
                      <button className="btn btn-secondary">Contáctame</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center">
              <img src={eli2} alt="Eliana" className="img-fluid" width="400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
