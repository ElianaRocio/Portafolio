import img02 from '../../assets/images/img02.png';
import img03 from '../../assets/images/img03.png';
import img04 from '../../assets/images/img04.png';
import img05 from '../../assets/images/img05.png';
import img06 from '../../assets/images/img06.png';
import img07 from '../../assets/images/img07.png';
import img08 from '../../assets/images/img08.png';
import img09 from '../../assets/images/img09.png';
import img00 from '../../assets/images/img00.png';
import img11 from '../../assets/images/img11.png';
import { Link } from 'react-router-dom';
import Descripcion from '../../components/Descripcion/Descripcion';

let lugar = [
  {
    tiempo: 'Rediseño de plataforma',
  },
];

export default function Formularioinfo() {
  return (
    <div>
      <div className="container my-3">
        <h1 className="titulo2">Formulario de registro</h1>
        <div className="col-sm">
          <div className="lugar">
            {lugar.map((descripcion, index) => {
              return (
                <Descripcion
                  key={index}
                  texto={descripcion.texto}
                  tiempo={descripcion.tiempo}
                  precio={descripcion.precio}
                  costo={descripcion.costo}
                ></Descripcion>
              );
            })}
          </div>
        </div>

        <div className="container mx-3">
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-briefcase-fill icono2"></i>
                <strong>Cargo: </strong> UX Design Researcher
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-bezier icono2"></i>
                <strong>Funciones: </strong> Arquitectura de la información, evaluación experta y
                rediseño de página en Figma.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-people-fill icono2"></i>
                <strong>Equipo: </strong> El proyecto se realizó en un equipo de 5 personas.
              </p>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <i class="bi bi-hourglass-bottom icono2"></i>
                <strong>Tiempo </strong>2 semanas
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <p className="texto1">
                <small>
                  <i class="bi bi-exclamation-triangle icono2"></i>
                  <strong>Disclaimer: Se modificaron datos por fines de confidencialidad.</strong>
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm">
              <p className="titulo6">Resúmen de proyecto</p>
              <p className="texto1">
                Construcción de un prototitpo de alta fidelidad para registrar datos de micro
                empresas, el cuál fue sometido a una evaluación experta en la cuál se obtuvieron
                puntos de mejora y hallazgos con los cuáles se realizó un rediseño de la plataforma
                para evitar el abandono de la misma y la frustración por parte de los usuarios al no
                poder realizar las tareas.
              </p>
              <p className="titulo6">Guia de estilo</p>
              <p className="texto1">
                Para la construccón del prototipo se inició creando el UI KIT o la guía de estilos,
                considerando todos los elementos de tipografía, logos, colores e iconos que se
                usarán a lo largo de la plataforma.
              </p>
              <div className="text-center">
                <img src={img02} alt="img" className="img-fluid" width="500" />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm">
              <p className="titulo6">Componentes</p>
              <p className="texto1">
                También se identificaron los elementos que se repetían a lo largo del flujo y se
                establecieron como componentes para que su uso sea más fácil y útil a lo largo del
                prototipo.{' '}
              </p>
              <div className="text-center">
                <img src={img03} alt="img" className="img-fluid" width="500" />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm">
              <p className="titulo6">Rediseño de pantallas antes y después</p>
              <p className="texto1">
                A continuación se mostrarán puntos de mejora del flujo, con su respectuvo rediseño y
                la razón de la misma.
              </p>
              <div className="text-center"></div>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <p className="tcos">1. Falta de orden y jerarquización del listado de documentos.</p>
          <p className="texto1">
            Se propone la adopción del modelo de “pirámide invertida” según la técnica de
            Parnofiello (2020) para organizar la información esencial, secundaria y detalles,
            reduciendo así el tiempo de búsqueda de información y asegurando que los usuarios
            encuentren rápidamente la información clave, mejorando su experiencia de lectura, además
            de agrupar los datos de acuerdo con la lógica de los requisitos
          </p>
          <div className="row">
            <div className="col-sm">
              <p className="tituloa text-center">
                {' '}
                <strong>Antes</strong>
              </p>
              <p className="texto1">
                El actual listado de requisitos contiene checks (paloma de verificación). Además, el
                listado carece de orden y jerarquía entre los datos, creando una desorganización
                visual con el check y dificultando la identificación y comprensión de la información
                necesaria para identificar los requerimientos.
              </p>
            </div>
            <div className="col-sm">
              <p className="tituloa text-center">
                {' '}
                <strong>Después</strong>
              </p>
              <p className="texto1">
                El actual listado de requisitos contiene checks (paloma de verificación). Además, el
                listado carece de orden y jerarquía entre los datos, creando una desorganización
                visual con el check y dificultando la identificación y comprensión de la información
                necesaria para identificar los requerimientos.
              </p>
            </div>
            <div className="row d-flex align-items-start">
              <div className="col-sm text-center">
                <img src={img04} alt="img" className="img-fluid" width="400" />
              </div>
              <div className="col-sm text-center">
                <img src={img05} alt="img" className="img-fluid" width="400" />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <p className="tcos">2. Falta de etiquetas en los campos de texto del formulario.</p>
          <p className="texto1">
            En el árticulo Placeholders in form fields are harmful de NN Group (Sherwin, 2014)
            menciona que el uso exclusivo de placeholders especialmente pone a prueba la memoria a
            corto plazo y cuando se trata de pensamiento abstracto, los humanos tenemos una
            capacidad intelectual extremadamente limitada. En formularios largos es posible que los
            usuarios no recuerden si tienen la opción de escribir “nombre” o “correo electrónico” y
            por ende, hace imposible que los usuarios puedan verificar sus respuestas y se aseguren
            de que sean correctas.
          </p>

          <div className="row">
            <div className="col-sm ">
              <p className="tituloa text-center">
                <strong>Antes</strong>
              </p>
              <p className="texto1">
                Se identificó el uso único de placeholders dentro del formulario que disminuye la
                visibilidad de los mismos, brindando un aspecto distinto al de un formulario, lo
                cual podría plantear diversos problemas para los usuarios al llenarlo
              </p>
            </div>
            <div className="col-sm ">
              <p className="tituloa text-center">
                <strong>Después</strong>
              </p>
              <p className="texto1">
                Para disminuir el riesgo de que los usuarios se abrumen durante el llenado de
                formulario es importante agregar etiquetas a los campos de texto, una vez que el
                campo es llenado, el placeholder desaparece, permitirá a los usuarios sentirse
                seguros. Por otro lado, estandarizar el tamaño de las fuentes brinda orden y
                coherencia al formulario
              </p>
            </div>
          </div>
          <div className="row my-2 text-center row d-flex align-items-start ">
            <div className="col-sm">
              <img src={img06} alt="img" className="img-fluid" width="300" />
            </div>
            <div className="col-sm">
              <img src={img07} alt="img" className="img-fluid" width="300" />
            </div>
          </div>
        </div>

        <div className="container my-3">
          <p className="tcos">3. Falta de libertad y control para el usuario.</p>
          <p className="texto1">
            El control del usuario y la libertad es una de las diez heurísticas de usabilidad de
            Nielsen (1993). Dice que los usuarios a menudo eligen funciones del sistema por error y
            necesitan una marcada claramente en una salida de emergencia para abandonar ese estado
            no deseado.{' '}
          </p>
          <div className="row ">
            <div className="col-sm">
              <p className="tituloa text-center">
                {' '}
                <strong>Antes</strong>
              </p>
              <p className="texto1">
                La pantalla de aprobación del crédito carece de una alternativa para retroceder en
                el proceso, al incluir solo un botón con el copy “lo quiero”, esto puede limitar la
                flexibilidad del usuario y su capacidad de tomar decisiones, pues solo le permite
                una sola acción{' '}
              </p>
            </div>
            <div className="col-sm">
              <p className="tituloa text-center">
                <strong>Después</strong>
              </p>
              <p className="texto1">
                Para mejorar la experiencia de los usuarios y brindarles mayor libertad en el
                proceso de navegación, se sugiere incorporar un botón “En otro momento” guardando la
                información cargada anteriormente para acceder en momentos posteriores . Esta
                funcionalidad proporcionará flexibilidad a los usuarios para tomar decisiones
                informadas, además de fomentar la autonomía dentro del flujo.
              </p>
            </div>
          </div>

          <div className="row row d-flex align-items-start text-center">
            <div className="col-sm">
              <img src={img08} alt="img" className="img-fluid" width="400" />
            </div>
            <div className="col-sm">
              <img src={img09} alt="img" className="img-fluid" width="400" />
            </div>
          </div>
        </div>

        <div className="container my-3">
          <p className="tcos"> 4. Steppers poco visibles para el seguimiento del proceso.</p>
          <p className="texto1">
            Los usuarios deben tener los elementos de seguimiento o interacción dentro del campo
            visual donde la vista periférica les permita ubicarlos. Para esto es necesario contar
            con textos lo suficientemente grandes y colores notorios para atraer la atención del
            usuario, de acuerdo a lo que sostiene Weinschenk (2010) en lo que corresponde al Sistema
            Visual.
          </p>
          <div className="row">
            <div className="col-sm">
              <p className="tituloa text-center">
                <strong>Antes</strong>
              </p>
              <p className="texto1">
                El seguimiento de los pasos que están realizando en cada una de las etapas del
                registro del formulario y la documentación a través de los steppers, pasan
                desapercibidos y poco útiles para seguir la secuencia del proceso
              </p>
            </div>
            <div className="col-sm">
              <p className="tituloa text-center">
                <strong>Después</strong>
              </p>
              <p className="texto1">
                Utilizar textos que acompañen el proceso y muestre la secuencia de los pasos que se
                están ejecutando, así como utilizar colores que muestren el proceso de avance
                exitoso en cada uno de ellos.{' '}
              </p>
            </div>
          </div>

          <div className="row d-flex align-items-start text-center my-3 ">
            <div className="col-sm">
              <img src={img00} alt="img" className="img-fluid" width="100" />
            </div>
            <div className="col-sm">
              <img src={img11} alt="img" className="img-fluid" width="120" />
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <p className="titulo6">Conclusiones</p>
            <p className="texto1">
              Se identificó que los problemas de organización, visualización y consistencia en los
              formularios indican una desconexión entre el diseño de la plataforma y las
              expectativas de los usuarios. Mejorar la jerarquía visual y la claridad de los pasos
              (steppers) puede facilitar la interacción y comprensión del flujo. Además, es crucial
              presentar la información de manera accesible, especialmente para usuarios con menos
              conocimiento técnico, lo que ayudará a completar las tareas de forma autónoma y
              reducirá barreras.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <div className="col-sm my-3" style={{ textAlign: 'right' }}>
            <Link to="/Prueba-de-usabilidad">
              {' '}
              <button className="btn btn-primary">Anterior</button>
            </Link>
          </div>
          <div className="col-sm my-3">
            <Link to="/Reconstrucción-app">
              {' '}
              <button className="btn btn-primary">Siguiente</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
