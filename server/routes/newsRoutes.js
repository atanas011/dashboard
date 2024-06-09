import { Router } from 'express'

import {
    createNews,
    getImages,
    addImages,
    getNews,
    updateNews,
    updateNewsStatus,
    getSingleNews,
    getAllNews,
    getNewsDetails,
    getCats
} from '../controllers/newsCtrl.js'
import { authToken } from '../middleware/authMW.js'

export const newsRouter = Router()

// dashboard
newsRouter.get('/news', authToken, getNews)
newsRouter.post('/news/create', authToken, createNews)
newsRouter.put('/news/update/:id', authToken, updateNews)
newsRouter.put('/news/update-status/:id', authToken, updateNewsStatus)
newsRouter.get('/news/:id', authToken, getSingleNews)

newsRouter.get('/images', authToken, getImages)
newsRouter.post('/images/add', authToken, addImages)

// website
newsRouter.get('/all/news', getAllNews)
newsRouter.get('/news/details/:slug', getNewsDetails)
newsRouter.get('/category/all', getCats)
