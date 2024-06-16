import express  from 'express'
import { readFile, writeFile } from 'fs/promises'
import recRouter from './routes/ingredientes.routes.js'
import ingRouter from './routes/recetas.routes.js'

const app = express()
const port = 3001
app.use(express.json())


app.use('/rec', recRouter)
app.use('/ing', ingRouter)
app.use(express.static('./public'))
app.use(express.static('./public/pages/recetas'))
app.listen(port,()=>{
    console.log(`Servidor levantado en el puerto ${port}`)
})