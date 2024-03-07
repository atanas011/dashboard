import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { connectDB } from './database.js'
import { router } from './routes/userRoutes.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api', router)

const PORT = process.env.PORT

connectDB()

app.listen(PORT, console.log(`Server running on port: ${PORT}`))
