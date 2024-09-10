import parque1g from '../../assets/images/parque1g.png';
import parque2g from '../../assets/images/parque2g.png';
import parque3g from '../../assets/images/parque3g.png';
import parque4g from '../../assets/images/parque4g.png';
import j1 from '../../assets/images/j1.png';
import j2 from '../../assets/images/j2.png';
import j3 from '../../assets/images/j3.png';
import j4 from '../../assets/images/j4.png';
export default function Slider() {
  return (
    <div className="container text-center my-5">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={j1} alt="parque1g" className="img-fluid" width="500" />
          </div>

          <div className="carousel-item">
            <img src={j2} alt="parque4g" className="img-fluid" width="500" />
          </div>
          <div className="carousel-item">
            <img src={j3} alt="parque4g" className="img-fluid" width="500" />
          </div>
          <div className="carousel-item">
            <img src={j4} alt="parque4g" className="img-fluid" width="500" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}