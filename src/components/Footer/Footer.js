export default function Footer() {

    return (
      <>
        <div className="container-fluid fondo3 my-3 p-3">
          <div className="row ">
            <div className="col-sm text-center">
              <p className="texto">
                <strong>Eliana Murillo</strong>{' '}
              </p>
              <p className="texto">
                Diseñadora gráfica, desarrolladora web, UX/UI Design Researcher.
              </p>
            </div>

            <div className="row ">
              <div className="col-sm d-flex justify-content-center ">
                <a href="https://www.linkedin.com/in/elianamdb/">
                  <i className="bi bi-linkedin px-3 icono"></i>
                </a>

                <a href="https://wa.me/62423144">
                  <i className="bi bi-whatsapp px-3 icono"></i>
                </a>

                <a href="mailto:erociomdb@gmail.com">
                  <i className="bi bi-envelope px-3 icono"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
