import Disneyland from "../Farmacias/Farmacias";
import Legoland from "../Airbnb/Airbnb";
import Village from "../Formulario/Formulario";
import Wizard from "../Telefonia/Telefonia";

export default function Menu() {
  return (
    <div className="my-3 p-3">

      <div className="container-fluid fondo my-3">

      <div className="row">
          <h1 className=" text-center titulo2  my-3">PROYECTOS</h1>
        </div>
        <div className="row my-3 menu">

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="Disneyland-tab" data-bs-toggle="tab" data-bs-target="#Disneyland" type="button" role="tab" aria-controls="Disneyland" aria-selected="true">Evaluación comparativa</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="Legoland-tab" data-bs-toggle="tab" data-bs-target="#Legoland" type="button" role="tab" aria-controls="Legoland" aria-selected="false">Caso de estudio</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="Wizard-tab" data-bs-toggle="tab" data-bs-target="#Wizard" type="button" role="tab" aria-controls="Wizard" aria-selected="false">Prueba de usabilidad</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="Village-tab" data-bs-toggle="tab" data-bs-target="#Village" type="button" role="tab" aria-controls="Village" aria-selected="false">Rediseño de plataforma</button>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane active" id="Disneyland" role="tabpanel" aria-labelledby="Disneyland-tab" tabindex="0"><Disneyland /> </div>
            <div class="tab-pane" id="Legoland" role="tabpanel" aria-labelledby="Legoland-tab" tabindex="0"><Legoland /> </div>
            <div class="tab-pane" id="Wizard" role="tabpanel" aria-labelledby="Wizard-tab" tabindex="0"><Wizard /></div>
            <div class="tab-pane" id="Village" role="tabpanel" aria-labelledby="Village-tab" tabindex="0"><Village /></div>
          </div>

        </div>
      </div>
    </div>

  );
}