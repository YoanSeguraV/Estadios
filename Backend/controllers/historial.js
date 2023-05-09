import { pool } from "../data/db.js";

export const getHistorial = async (req, res) => {
  try {
   


    const [rows] =
      await pool.query(`SELECT h.id_partido, e1.nombre_equipo AS equipo_local, e2.nombre_equipo AS equipo_visitante, es.nombre AS estadio, h.fecha, h.resultado
FROM tbl_historial h
INNER JOIN tbl_equipo e1 ON h.id_equipo1 = e1.id_equipo
INNER JOIN tbl_equipo e2 ON h.id_equipo2 = e2.id_equipo
INNER JOIN tbl_estadios es ON h.id_estadioh = es.id_estadio;`);

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};

export const postHistorial = async (req, res) => {
  try {
    const { id_equipo1, id_equipo2, id_estadioh, fecha, resultado } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO tbl_historial (id_equipo1,id_equipo2,id_estadioh,fecha,resultado) VALUES(?,?,?,?,?)",
      [id_equipo1, id_equipo2, id_estadioh, fecha, resultado]
    );

    res.json("insertado correctamente");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteHistorial = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM tbl_historial WHERE id_partido=?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "error" });
    }
    res.json("eliminado correctamente");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
