import { context } from "../context/context";

function Modal() {
  const {
    setnombreEquipo,
    setciudadEquipo,
     nombreEquipo,
     ciudadEquipo,
     titleEquipo,
    
   
        validacionEquipo,

  } = context();
  return (
    <div
      className="modal fade"
      id="modals"
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
             {titleEquipo}
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
                placeholder="Ingrese Nombre del equipo"
                onChange={(e) => setnombreEquipo(e.target.value)}
                value={nombreEquipo}
              />
              <input
                className="form-control my-4"
                type="text"
                placeholder="Ingrese Ciudad"
                onChange={(e) => setciudadEquipo(e.target.value)}
                value={ciudadEquipo}
              />
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary w-75"
              onClick={() => validacionEquipo()}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
