import Table from "../../components/Table/Table";
import Lego1 from '../../assets/images/Lego1.png';
import Lego2 from '../../assets/images/Lego2.png';
import Lego3 from '../../assets/images/Lego3.png';
import Descripcion from "../../components/Descripcion/Descripcion";
import Detalles from "../../components/Detalles/Detalles";
import Detalles2 from "../../components/Detalles2/Detalles2";


let lugar = [
    {
        texto: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
        tiempo: 'Paquete 3 días / 2 noches',
        precio: 'Precio por persona',
        costo: '600 $us ',
    },
];

export default function Info2Page() {
    return (
        <div>
            <div className="container my-3">
                <h1 className="titulo2">LEGOLAND</h1>
                <div className="col-sm">
                    <div className="lugar">
                        {lugar.map((descripcion, index) => {
                            return (
                                <Descripcion
                                    key={index} texto={descripcion.texto}
                                    tiempo={descripcion.tiempo}
                                    precio={descripcion.precio}
                                    costo={descripcion.costo}
                                >
                                </Descripcion>
                            );
                        })}
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm my-3">
                        <img src={Lego1} alt="Lego1" className="img-fluid" width="300" />
                    </div>
                    <div className="col-sm my-3">
                        <img src={Lego2} alt="Lego2" className="img-fluid" width="300" />
                    </div>
                    <div className="col-sm my-3">
                        <img src={Lego3} alt="Lego3" className="img-fluid" width="300" />
                    </div>
                </div>

                <div className="row my-3">
                    <h2 className="titulo3">DETALLES</h2>
                    <p className="texto1">es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>

                <div className="row my-3">
                    <h2 className="titulo3">INTINERARIO</h2>

                    <div className="row my-3">

                        <Table />
                    </div>
                </div>
            </div>

            <div className="container my-3">
                <h3 className="titulo3">OTROS DETALLES</h3>
                <div className="row my-3">
                    <div className="col-sm my-3">
                        <Detalles />
                    </div>
                    <div className="col-sm my-3">
                        <Detalles />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm my-3">
                        <h3 className="titulo3">OTROS DETALLES</h3>

                        <Detalles2 />
                    </div>

                </div>
            </div>
        </div>
    );

}