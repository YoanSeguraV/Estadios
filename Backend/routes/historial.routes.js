import {Router} from 'express'
import {getHistorial,deleteHistorial,postHistorial} from '../controllers/historial.js'

const routes=Router()

routes.get("/historial",getHistorial)
routes.post("/historial",postHistorial)
routes.delete("/historial/:id",deleteHistorial)




export  default routes