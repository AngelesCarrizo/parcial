import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'
const file = await readFile('./data/ingredientes.json','utf-8')

const ingData = JSON.parse(file)
const router = Router()

/*todas los ingredientes*/
router.get('/alling',(req,res)=>{
    res.status(200).json(ingData)
})
/*agregar ingrediente*/ 

router.post('/nuevo', async (req, res) => {
    const { id, nombre } = req.body
    if (!id || !nombre ) {
        return res.status(400).json('los datos son requeridos')
    }
    const nuevoid = ingredientes.length > 0 ? ingredientes[ingredientes.length - 1].id + 1 : 1;
    const nuevoing = {
        id: nuevoid,
            nombre
    }
    
    ingData.push(nuevoing)
    
    try {
        await writeFile('./data/ingredientes.json', JSON.stringify(ingData, null, 2))
        res.status(201).json(nuevoing)
    } catch (error) {
        res.status(500).json('Error al crear ingrediente')
    }
})
/* informacion ingredientes */
router.get('/infoIngredientes', async (req, res) => {
    try {
       
        if (ingredientes.length === 0) {
            res.status(200).json([]);
        } else {
            res.status(200).json(ingData);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la información de los ingredientes' });
    }
});

export default router