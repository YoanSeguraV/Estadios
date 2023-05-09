import React from "react";
import { context } from "../context/context";
import { BiAddToQueue } from "react-icons/bi";
function CrearJuego() {
  const {
    dataEstadios,
    setTiempo,
    semarcador1,
    semarcador2,
    setestadiovalue,
    crearPartida,
    setselect2,
    data,
    setselect1,
    equipo1,
    equipo2,
  } = context();

  return (
    <div
      className="modal fade "
      id="modalhistorial"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog modal-lg mt-5">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Creando Partido
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            
              <select
              
                className="form-select"
                onChange={(e) => setselect1(e.target.value)}
              >
                <option defaultValue> Equipo local</option>
                {data.filter((item) => item.id_equipo !== equipo2)
                  .map((item) => (
                    <option  defaultValue key={item.id_equipo} value={item.id_equipo}>
                      {item.nombre_equipo}
                    </option>
                  ))}
              </select>
            
            <div className="mt-4">
              <select
              defaultValue
                name=""
                className="form-select"
                onChange={(e) => setselect2(e.target.value)}
              >
                <option  defaultValue>
                  {" "}
                  Equipo visitante
                </option>
                {data
                  .filter((item) => item.id_equipo !== equipo1)
                  .map((item) => (
                    <option key={item.id_equipo} value={item.id_equipo}>
                      {item.nombre_equipo}
                    </option>
                  ))}
              </select>
            </div>

            <div className="mt-4">
              <select
              
                className="form-select"
                onChange={(e) => {
                  setestadiovalue(e.target.value);
                }}
              >
                <option  defaultValue>
                  Estadio
                </option>
                {dataEstadios.map((item) => (
                  <option defaultValue key={item.id_estadio} value={item.id_estadio}>
                    {item.nombre}
                  </option>
                ))}
              </select>

              <div className="mt-3">
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setTiempo(e.target.value)}
                />
              </div>
              <p className=" mt-3 ">Resultado</p>
              <div className="mt-3 d-flex">
                <input
                  type="number"
                  placeholder="E1"
                  className="form-control w-25 mx-2"
                  onChange={(e) => semarcador1(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="E2"
                  className="form-control w-25"
                  onChange={(e) => semarcador2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            
            <button
              type="submit"
              className="btn btn-primary w-50"
              onClick={() => crearPartida()}
            >
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearJuego;
