import { Link, Outlet } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import CrearJuego from "./CrearJuego";
import Modal from "./Modal";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg  ">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand text-primary  ">
            GOL SPORT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav  mx-3 ">
              <Link to="/" className="nav-link active text-white mx-2 ">
                Equipos
              </Link>
              <Link to={"/estadios"} className="nav-link text-white mx-2">
                Estadios
              </Link>
              <Link to={"/historial"} className="nav-link text-white mx-2">
                Historial
              </Link>
            </div>
          </div>
          <div className="d-flex jsutify-content-end">
            <button
              className="btn btn-primary mx-4 "
              data-bs-toggle="modal"
              data-bs-target="#modalhistorial"
            >
              <BiAddToQueue />
              Crear Partido
            </button>
          </div>
        </div>
        <Modal />
        <CrearJuego />
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
