import {Router} from 'express'
import {deleteEquipo,getEquipo,getEquipos,postEquipo,putEquipo} from '../controllers/equipos.js'

const routes=Router()

routes.get("/equipos",getEquipos)
routes.get("/equipos/:id",getEquipo)
routes.post("/equipos",postEquipo)
routes.put("/equipos/:id",putEquipo)
routes.delete("/equipos/:id",deleteEquipo)



export  default routes