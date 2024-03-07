import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { connectDB } from './database.js'
import { userRouter } from './routes/userRoutes.js'
import { newsRouter } from './routes/newsRoutes.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api', userRouter)
app.use('/api', newsRouter)

const PORT = process.env.PORT

connectDB()

app.listen(PORT, console.log(`Server running on port: ${PORT}`))
