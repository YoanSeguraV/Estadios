import {Router} from 'express'
import {deleteEstadio,getEstadio,getEstadios,postEstadio,putEstadio} from '../controllers/estadios.js'

const routes=Router()

routes.get("/estadio",getEstadios)
routes.get("/estadio/:id",getEstadio)
routes.post("/estadio",postEstadio)
routes.put("/estadio/:id",putEstadio)
routes.delete("/estadio/:id",deleteEstadio)



export  default routes