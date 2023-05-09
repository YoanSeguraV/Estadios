import express from 'express'
import historialRoutes from './routes/historial.routes.js'
import estadiosRoutes from './routes/estadios.routes.js'
import equiposRoutes from './routes/equipos.routes.js'
import cors from 'cors'
import morgan from 'morgan'



const app=express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(historialRoutes)
app.use(estadiosRoutes)
app.use(equiposRoutes)



app.listen(4000)
console.log("servidor corriendo")