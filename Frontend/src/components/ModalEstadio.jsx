import React from "react";
import { context } from "../context/context";

function ModalEstadio() {
  const { setnombreEstadio, setUbicacion,validacionEstadios,ubicacion,nombreEstadio,titleEstadio } = context();
  return (
    <div
      className="modal fade"
      id="modalestadio"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
            {titleEstadio}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <input
                className="form-control my-3"
                type="text"
                placeholder="Ingrese Nombre del estadio"
                onChange={(e) => setnombreEstadio(e.target.value)}
                value={nombreEstadio}
              />
              <input
                className="form-control my-4"
                type="text"
                placeholder="Ingrese ubicacion"
                onChange={(e) => setUbicacion(e.target.value)}
                value={ubicacion}
              />
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary w-75"
              onClick={() => validacionEstadios()}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEstadio;
