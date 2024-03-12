import { Router } from 'express'

import { createNews, getImages, addImages, getNews } from '../controllers/newsCtrl.js'
import { authToken } from '../middleware/authMW.js'

export const newsRouter = Router()

newsRouter.get('/news', authToken, getNews)
newsRouter.post('/news/create', authToken, createNews)

newsRouter.get('/images', authToken, getImages)
newsRouter.post('/images/add', authToken, addImages)
