import { Router } from 'express'
import { list, create, getById, updateById, deleteById } from '../controllers/medicos.controller'

const router = Router();

// medicos endpoints
router.get('/', list)
router.post('/', create)
router.get('/:id', getById)
router.put('/:id', updateById)
router.delete('/:id', deleteById)

export default router