import {pool} from '../data/db.js'


export const getEstadios= async(req,res)=>{
    try {
        const [rows]= await pool.query("SELECT * FROM tbl_estadios")

        res.json(rows)
    } catch (error) {
        res.status(500).json({error: "error"})
    }


}

export const getEstadio= async(req,res)=>{
    try {
        const [rows]= await pool.query("SELECT * FROM tbl_estadios WHERE id_estadio=?",[req.params.id])

        if(rows.length <= 0){
            res.status(404).json({error: "error"})
        }
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({error: error})
    }


}

export const postEstadio= async(req,res)=>{
    try {
        const{nombre,ubicacion}=req.body
        const [rows]= await pool.query("INSERT INTO tbl_estadios(nombre,ubicacion) VALUES(?,?)",[nombre,ubicacion])

        
        res.json("insertado correctamente")
    } catch (error) {
        res.status(500).json({error: error})
    }


}

export const putEstadio= async(req,res)=>{
    try {
        const{id }=req.params
        const{nombre,ubicacion}=req.body
        const [result]= await pool.query("UPDATE tbl_estadios SET nombre= ? , ubicacion= ?   WHERE id_estadio=? ", [nombre,ubicacion,id ])
        if(result.affectedRows === 0){
            res.status(404).json({error: "error"})
        }
        res.json("actualizado correctamente")
    } catch (error) {
        res.status(500).json({error: error})
    }


}
export const deleteEstadio= async(req,res)=>{
    try {
        const [result]= await pool.query("DELETE FROM tbl_estadios WHERE id_estadio=?",[req.params.id])

        if(result.affectedRows === 0){
            res.status(404).json({error: "error"})
        }
        res.json("eliminado correctamente")
    } catch (error) {
        res.status(500).json({error: error})
    }


}