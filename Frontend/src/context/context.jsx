import { createContext, useContext, useState } from "react";
import {
  getEquipos,
  getEstadios,
  getHistorial,
  postEquipos,
  postEstadios,
  postHistorial,
  deleteHistoria,
  updateEstadios,
  updateEquipos,
} from "../data/api";
export const ServicesContext = createContext();

export const context = () => {
  const Context = useContext(ServicesContext);
  if (!Context) {
    throw new Error("no esta funcionado el contexto");
  }
  return Context;
};

export const ServicesContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataEstadios, setdataEstadios] = useState([]);
  const [dataHistorial, setdataHistorial] = useState([]);
  const [nombreEquipo, setnombreEquipo] = useState("");
  const [ciudadEquipo, setciudadEquipo] = useState("");
  const [idEquipo, setIdEquipo] = useState();
  const [titleEquipo, setTitle] = useState("Agregando Equipo");
  const [opEquipo, setopEquipo] = useState("");
  const [search, setSearch] = useState("");

  {
    /!* Estadios*/;
  }

  const [nombreEstadio, setnombreEstadio] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [idEstadio, setIdEstadio] = useState();
  const [titleEstadio, setTitleEstadio] = useState("Agregando Estadio");
  const [opEstadio, setopEstadio] = useState();

  {
    /!* Historial*/;
  }

  const [tiempo, setTiempo] = useState("");
  const [marcador1, semarcador1] = useState("");
  const [marcador2, semarcador2] = useState("");
  const [equipo1, setselect1] = useState(0);
  const [equipo2, setselect2] = useState(0);
  const [estadiovalue, setestadiovalue] = useState("");

  {
    /!* Equipos */;
  }
  const load = async () => {
    const response = await getEquipos();
    setData(response);
  };

  const openModalEquipos = (op, nombreEquipo, ciudadEquipo, id_equipo) => {
    setnombreEquipo("");
    setciudadEquipo("");
    setIdEquipo("");
    if (op === 1) {
      setopEquipo(1);
    } else if (op === 2) {
      setnombreEquipo(nombreEquipo);
      setciudadEquipo(ciudadEquipo);
      setIdEquipo(id_equipo);
      setopEquipo(2);
      setTitle("Actualizando Equipo");
    }
  };
  const validacionEquipo = () => {
    if (opEquipo === 1) {
      const postEquipo = async () => {
        const user = {
          nombre_equipo: nombreEquipo,
          ciudad_equipo: ciudadEquipo,
        };
        const response = await postEquipos(user);

        setData([...data, user]);
      };
      postEquipo();
    } else if (opEquipo === 2) {
      const putEquipo = async () => {
        const user = {
          nombre_equipo: nombreEquipo,
          ciudad_equipo: ciudadEquipo,
        };
        const response = await updateEquipos(idEquipo, user);
        location.reload();
      };
      putEquipo();
    }
  };

  {
    /!* ESTADIOS */;
  }

  const loadEstadios = async () => {
    const response = await getEstadios();

    setdataEstadios(response);
  };
  const openModalEstadios = (op, nombreEstadio, ubicacion, id_estadio) => {
    if (op === 1) {
      setopEstadio(1);
    } else if (op === 2) {
      setnombreEstadio(nombreEstadio);
      setUbicacion(ubicacion);
      setIdEstadio(id_estadio);
      setopEstadio(2);
      setTitleEstadio("Actualizando Estadio");
    }
  };
  const validacionEstadios = () => {
    if (opEstadio === 1) {
      const postEstadio = async () => {
        const user = { nombre: nombreEstadio, ubicacion: ubicacion };
        const response = await postEstadios(user);
        // setdataEstadios([...dataEstadios, user]);
        location.reload();
      };
      postEstadio();
    } else if (opEstadio === 2) {
      const putEstadio = async () => {
        const user = { nombre: nombreEstadio, ubicacion: ubicacion };
        const response = await updateEstadios(idEstadio, user);
        // setdataEstadios([...dataEstadios, user]);
        location.reload();
      };

      putEstadio();
    }
  };

  {
    /!*HISTORIAL*/;
  }

  const loadHistorial = async () => {
    const response = await getHistorial();
    setdataHistorial(response);
  };

  const crearPartida = async () => {
    const user = {
      id_equipo1: equipo1,
      id_equipo2: equipo2,
      id_estadioh: estadiovalue,
      fecha: tiempo,
      resultado: `${marcador1}-${marcador2}`,
    };
    const response = await postHistorial(user);
    location.reload();
  };

  const deleteHistorial = async (id) => {
    const response = await deleteHistoria(id);
    location.reload();
  };

  return (
    <ServicesContext.Provider
      value={{
        load,
        data,
        loadEstadios,
        dataEstadios,
        dataHistorial,
        loadHistorial,
        setnombreEquipo,
        setciudadEquipo,
        nombreEquipo,
        ciudadEquipo,
        setnombreEstadio,
        nombreEstadio,
        ubicacion,
        setUbicacion,
        openModalEquipos,
        validacionEquipo,
        crearPartida,
        setTiempo,
        semarcador1,
        semarcador2,
        setselect1,
        setselect2,
        equipo1,
        equipo2,
        setestadiovalue,
        deleteHistorial,
        titleEquipo,
        openModalEstadios,
        validacionEstadios,
        titleEstadio,
        setData,
        setSearch,
        search,
        setdataHistorial
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
