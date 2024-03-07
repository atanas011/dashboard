import { Router } from 'express'

import { createNews } from '../controllers/newsCtrls.js'
import { authToken } from '../middleware/authMW.js'

export const newsRouter = Router()

newsRouter.post('/news/create', authToken, createNews)
