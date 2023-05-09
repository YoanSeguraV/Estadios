import React, { useEffect, useState } from "react";

import Modal from "../components/Modal";
import { context } from "../context/context";

function Historial() {
  const {
    dataHistorial,
    loadHistorial,
    load,
    loadEstadios,
    deleteHistorial,
    setdataHistorial,
    dataEstadios,
  } = context();

  // const [search, setsearch] = useState("")
  const [selectedEstadio, setSelectedEstadio] = useState("");

  useEffect(() => {
    loadHistorial();
    load();
    loadEstadios();
  }, []);

  useEffect(() => {
    const filteredHistorial = dataHistorial.filter((item) =>
      selectedEstadio ? item.estadio === selectedEstadio : true
    );
    if (selectedEstadio === "all" ){
      setdataHistorial(dataHistorial)
    }else{
      setdataHistorial(filteredHistorial);
    }
    
  }, [selectedEstadio])

  console.log(dataEstadios)
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5">Historial De Todos</h3>
        <table className="table table-striped   bg-Success mt-5">
          <thead className="table-dark ">
            <tr>
              <th>Equipo Local</th>
              <th>Equipo Visitante</th>
              <th>Estadio</th>
              <th>Fecha</th>
              <th  className="text-start">Resultado</th>
              <th>Eliminar</th>
              <th>
                <select
                  value={selectedEstadio}
                  onChange={(e) => setSelectedEstadio(e.target.value)}
                >
                  <option defaultValue value={"all"}>Seleccionar estadio</option>
                  {dataEstadios.map((item) => (
                    // item.nombre == 
                    <option key={item.id_estadio} value={item.nombre}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            
            {
              dataHistorial.length > 0
              ?
              (
                dataHistorial.map((item) => (
                  <tr key={item.id_partido}>
                    <td>{item.equipo_local}</td>
                    <td>{item.equipo_visitante}</td>
                    <td>{item.estadio}</td>
                    <td>{item.fecha}</td>
                    <td>{item.resultado}</td>
                    <td colSpan={2}>
                      <button
                        onClick={() => deleteHistorial(item.id_partido)}
                        className="btn btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) :(
                <tr>
                <td colSpan={7}>
                  <div className="alert alert-secondary" role="alert">
                    Este estadio  no tiene historial
                  </div>
                </td>
              </tr>
              )}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <Modal />
    </>
  );
}

export default Historial;
