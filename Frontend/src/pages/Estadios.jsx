import { useEffect } from "react";

import ModalEstadio from "../components/ModalEstadio";
import { context } from "../context/context";

function Estadios() {
  const { loadEstadios, dataEstadios, openModalEstadios, } = context();
  

  useEffect(() => {
    loadEstadios();
  }, []);
  return (
    <>
      <div className="container W-75 ">
        <h2 className="text-center mt-5">Listado de Estadios</h2>
        <table className="table table-striped   bg-Success mt-5">
          <thead className="table-dark ">
            <tr>
              <th>Nombre Estadio</th>
              <th>Ciudad</th>
              <th>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalestadio"
                  onClick={() => openModalEstadios(1)}
                >
                  Agregar
                </button>
              </th>
              
            </tr>
          </thead>
          <tbody>
            {dataEstadios.map((item) => (
              <tr key={item.id_estadio}>
                <td>{item.nombre}</td>
                <td>{item.ubicacion}</td>
                <td>
                  <button
                    className="btn  border-1   btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#modalestadio"
                    onClick={() => openModalEstadios(2,item.nombre,item.ubicacion,item.id_estadio)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>

        
      </div>
      <ModalEstadio />
    </>
  );
}

export default Estadios;
