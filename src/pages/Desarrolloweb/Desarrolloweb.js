import web1 from '../../assets/images/web1.png';
import web2 from '../../assets/images/web2.png';
import web3 from '../../assets/images/web3.png';
import web4 from '../../assets/images/web4.png';

export default function Desarrolloweb() {
  return (
    <div className="container ">
      <div className="row text-center">
        <h1 className="titulo my-6 ">Desarrollo Web</h1>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-sm">
            <p className="titulo2">Página de turismo</p>
            <p className="tcos">Travelnet</p>
            <a className="texto3 " href="https://github.com/ElianaRocio/proyectoTurismo">
              Ver repositorio
            </a>
            <p className="texto1 my-3">
              Diseño y desarrollo de una plataforma de turismo utilizando el framework React y React
              DOM para la renderización eficiente de la interfaz de usuario. Se implementaron
              componentes modulares para organizar la información de manera clara y reutilizable. La
              estructura de la página se creó con React DOM, lo que permitió una actualización
              dinámica del contenido y una navegación fluida. Para el diseño visual, se utilizó Sass
              como preprocesador CSS, facilitando la creación de una guía de estilo coherente y
              escalable. Además, se emplearon React Hooks para optimizar la funcionalidad y mejorar
              la experiencia del usuario.
            </p>
          </div>
        </div>
        <div className="row text-center my-3">
          <div className="col ">
            <img src={web1} alt="img" className="img-fluid" width="300" />;
          </div>
          <div className="col">
            <img src={web2} alt="img" className="img-fluid" width="300" />;
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <div className="col-sm">
            <p className="titulo2">Página de e-commerce</p>
            <p className="tcos">Pastelería Julys Bakery</p>
            <a className="texto3" href="https://github.com/ElianaRocio/e-commerce">
              Ver repositorio
            </a>
            <p className="texto1 my-3">
              Diseño y desarrollo de una plataforma de e-commerce para una pastelería utilizando
              React y React DOM, con la funcionalidad de un carrito de compras para adquirir
              productos. Se implementaron dos versiones de la plataforma: una vista para el
              administrador, que permite gestionar el inventario y pedidos, y una vista para el
              comprador, que facilita la selección y compra de productos. Se utilizó una API para
              conectar la base de datos de productos con la interfaz, asegurando una actualización
              en tiempo real del inventario y un flujo de compra eficiente. Además, Sass se empleó
              para crear una guía de estilo consistente, y React Hooks optimizaron la interacción y
              el rendimiento de la aplicación.
            </p>
          </div>
        </div>
        <div className="row text-center my-3">
          <div className="col ">
            <img src={web3} alt="img" className="img-fluid" width="300" />;
          </div>
          <div className="col">
            <img src={web4} alt="img" className="img-fluid" width="300" />;
          </div>
        </div>
      </div>
    </div>
  );
}
