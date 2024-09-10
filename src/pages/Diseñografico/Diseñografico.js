
import Juegomesa from '../../components/Juegomesa/Juegomesa';
import Tipografia from '../../components/Tipografia/Tipografia';
import Tedxumsa from '../../components/Tedxumsa/Tedxumsa';


export default function DiseñoGrafico() {
  return (
    <div className="container my-3">
      <div className="row text-center">
        <h1 className="titulo my-6 mx-3">Diseño Gráfico</h1>
      </div>

      <Juegomesa />
      <Tipografia></Tipografia>
      <Tedxumsa />
    </div>
  );
}
