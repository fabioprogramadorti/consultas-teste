import { Router } from 'express'
import { list, create, getById, updateById, deleteById, listMedicos } from '../controllers/consultas.controller'

const router = Router();

// consultas endpoints
router.get('/', list)
router.post('/', create)
router.get('/:id', getById)
router.put('/:id', updateById)
router.delete('/:id', deleteById)

export default router