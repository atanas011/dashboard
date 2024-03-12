import { Router } from 'express'

import {
    createNews,
    getImages,
    addImages,
    getNews,
    updateNews,
    updateNewsStatus,
    getSingleNews
} from '../controllers/newsCtrl.js'
import { authToken } from '../middleware/authMW.js'

export const newsRouter = Router()

newsRouter.get('/news', authToken, getNews)
newsRouter.post('/news/create', authToken, createNews)
newsRouter.put('/news/update/:id', authToken, updateNews)
newsRouter.put('/news/update-status/:id', authToken, updateNewsStatus)
newsRouter.get('/news/:id', authToken, getSingleNews)

newsRouter.get('/images', authToken, getImages)
newsRouter.post('/images/add', authToken, addImages)
