import React, { useState } from 'react'
import Modal from './Modal'
import { HiPlus } from "react-icons/hi2";
import { context } from "../context/context";

function Equil() {

    const { data, openModalEquipos,setSearch,setData,search} = context();

    const handleSumbit = (e) => {
        e.preventDefault();
    
        setData(data.filter((item) =>
            item.nombre_equipo.toLowerCase().includes(search.toLowerCase())
          )
        );
      };
    
   
  return (
    <div>
       <div className="container">
        <form  onSubmit={handleSumbit}>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        <button type="submit"> Buscar</button>
        </form>
        
        <h3 className="text-center mt-5 ">Listado de Equipos</h3>
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
                 <HiPlus/> Agregar{" "}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
                data.lenght > 0 
                ?
                (
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
                ):(
                    <h1>not found</h1>
                )
            }
           
            
          </tbody>
        </table>
      </div>
     
      <Modal />
    </div>
  )
}

export default Equil
