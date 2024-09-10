import Farmacias from "../../components/Farmacias/Farmacias";
import Airbnb from "../../components/Airbnb/Airbnb";
import Telefonia from "../../components/Telefonia/Telefonia";
import Formulario from "../../components/Formulario/Formulario";
import Hbomax from "../../components/Hbomax/hbomax";
import Botwhap from "../../components/Botwhap/Botwhap";
export default function Uxui() {

  return (
    <div className="container my-3">
      <div className="row text-center">
        <h1 className="titulo my-6 mx-3">UX/UI Research</h1>
        
      </div>

      <Farmacias />
      <Airbnb />
      <Telefonia />
      <div className="row text-center my-3 mx-3">
        <h1 className="titulo">UX/UI Design</h1>
      </div>
      <Formulario />
      <Hbomax />
      <Botwhap />
      <div className="container-fluid"></div>
    </div>
  );
}








