import { Router } from 'express'

import { login, getWriters, addWriter } from '../controllers/userCtrls.js'
import { authToken, authRole } from '../middleware/authMW.js'

export const router = Router()

router.post('/login', login)

router.get('/writers', authToken, authRole, getWriters)
router.post('/writers/add', authToken, authRole, addWriter)
