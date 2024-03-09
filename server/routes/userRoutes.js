import { Router } from 'express'

import { login, getWriters, addWriter } from '../controllers/userCtrl.js'
import { authToken, authRole } from '../middleware/authMW.js'

export const userRouter = Router()

userRouter.post('/login', login)

userRouter.get('/writers', authToken, authRole, getWriters)
userRouter.post('/writers/add', authToken, authRole, addWriter)
