import axios from "axios";

{/!* EQUIPOS*/}

export const getEquipos = async () => {
  const response = await fetch("http://localhost:4000/equipos");
  const data = response.json();

  return data;
};

export const postEquipos = async (user) => {
  try {
    const response = await axios.post("http://localhost:4000/equipos", user);
  } catch (error) {
    console.log(error);
  }
};

export const updateEquipos = async (id_equipo, user) => {
  try {
    const response = await axios.put(
      `http://localhost:4000/equipos/${id_equipo}`,
      user
    );
  } catch (error) {
    console.log(error);
  }
};


{/!* ESTADIOS*/}
export const getEstadios = async () => {
  const response = await fetch("http://localhost:4000/estadio");
  const data = response.json();

  return data;
};
export const postEstadios = async (user) => {
  try {
    const response = await axios.post("http://localhost:4000/estadio", user);
  } catch (error) {
    console.log(error);
  }
};

export const updateEstadios = async (id_estadios, user) => {
  console.log(id_estadios);

  console.log(user);
  try {
    const response = await axios.put(
      `http://localhost:4000/estadio/${id_estadios}`,
      user
    );
  } catch (error) {
    console.log(error);
  }
};

{/!* HISTORIAL*/}

export const getHistorial = async () => {
  const response = await fetch("http://localhost:4000/historial");
  const data = response.json();

  return data;
};

export const postHistorial = async (user) => {
  console.log(user);
  try {
    const response = await axios.post("http://localhost:4000/historial", user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteHistoria = async (id) => {
  console.log(id);
  try {
    const response = await axios.delete(
      `http://localhost:4000/historial/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};
