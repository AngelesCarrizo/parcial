import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'
const file = await readFile('./data/recetas.json','utf-8')

const recData = JSON.parse(file)
const router = Router()


/*todas las recetas*/
router.get('/allrec',(req,res)=>{
    res.status(200).json(recData)
})
/*agregar recetas*/

router.post('/nuevarec', async (req, res) => {
    const {  nombre , ingredientes} = req.body
    if ( !nombre || !ingredientes) {
        return res.status(400).json('los datos son requeridos')
    }
    const nuevoid = recetas.length > 0 ? recetas[recetas.length - 1].id + 1 : 1;
    const nuevarec = {
        id: nuevoid,
            nombre,
            ingredientes
    }
    
    ingData.push(nuevarec)
    
    try {
        await writeFile('./data/recetas.json', JSON.stringify(recData, null, 2))
        res.status(201).json(nuevarec)
    } catch (error) {
        res.status(500).json('Error al crear receta')
    }
})


export default router