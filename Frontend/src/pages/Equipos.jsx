import { useEffect, useState } from "react";

import Modal from "../components/Modal";
import { context } from "../context/context";
import { HiPlus } from "react-icons/hi2";

function Equipos() {
  const { load, data, openModalEquipos, setData } = context();
  const [search, setSearch] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    setData(
      data.filter((item) =>
        item.nombre_equipo.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  useEffect(() => {
    load();
    
    
    
  }, [search]);

  return (
    <div>
      
      <div className="container w-74">
        
       

        <h3 className="text-center mt-5 ">Listado de Equipos</h3>
        <div className="">
        <form className="d-flex justify-content-center mt-2" onSubmit={handleSumbit}>
          <input type="text" placeholder="Busque su equipo"  className="form-control w-100  " onChange={(e) => setSearch(e.target.value)} />
          <button type="submit" className="btn btn-primary"> Buscar</button>
        </form>
        </div>
        <table className="table table-striped    bg-Success mt-5">
          <thead className="table-dark ">
            <tr>
              <th>Nombre Equipo</th>
              <th className="">Ciudad</th>
              <th colSpan={2}>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modals"
                  onClick={() => openModalEquipos(1)}
                >
                  <HiPlus /> Agregar{" "}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id_equipo}>
                  <td>{item.nombre_equipo}</td>
                  <td>{item.ciudad_equipo}</td>

                  <td>
                    <button
                      className="btn btn-outline-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#modals"
                      onClick={() =>
                        openModalEquipos(
                          2,
                          item.nombre_equipo,
                          item.ciudad_equipo,
                          item.id_equipo
                        )
                      }
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              
              <tr>
                <td colSpan={4}>
                  <div className="alert alert-secondary" role="alert">
                    Equipo no registrado
                  </div>
                </td>
              </tr>
              
              
            )
            
            }
          </tbody>
        </table>
      </div>
      <Modal />
    </div>
  );
}

export default Equipos;
