import {pool} from '../data/db.js'


export const getEquipos= async(req,res)=>{
    try {
        const [rows]= await pool.query("SELECT * FROM tbl_equipo")

        res.json(rows)
    } catch (error) {
        res.status(500).json({error: "error"})
    }


}

export const getEquipo= async(req,res)=>{
    try {
        const [rows]= await pool.query("SELECT * FROM tbl_equipo WHERE id=?",[req.params.id])

        if(rows.length <= 0){
            res.status(404).json({error: "error"})
        }
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({error: error})
    }


}

export const postEquipo= async(req,res)=>{
    try {
        const{nombre_equipo,ciudad_equipo}=req.body
        const [rows]= await pool.query("INSERT INTO tbl_equipo (nombre_equipo,ciudad_equipo) VALUES(?,?)",[nombre_equipo,ciudad_equipo])

        
        res.json("insertado correctamente")
    } catch (error) {
        res.status(500).json({error: error})
    }


}

export const putEquipo= async(req,res)=>{
    try {
        const{id}=req.params
        const{nombre_equipo,ciudad_equipo}=req.body
        const [result]= await pool.query("UPDATE tbl_equipo SET nombre_equipo=? ,ciudad_equipo=? WHERE id_equipo= ?",[nombre_equipo,ciudad_equipo,id])

        if(!req.body){
            res.status(404).json({ error:"Ingrese todos los campos"})
        }
        if(result.affectedRows === 0){
            res.status(404).json({error: "error"})
        }
        
        res.json("actualizado correctamente")
    } catch (error) {
        res.status(500).json({error: error})
    }


}
export const deleteEquipo= async(req,res)=>{
    try {
        const [result]= await pool.query("DELETE FROM tbl_equipo WHERE id_equipo=?",[req.params.id])

        if(result.affectedRows === 0){
            res.status(404).json({error: "error"})
        }
        res.json("eliminado correctamente")
    } catch (error) {
        res.status(500).json({error: error})
    }


}