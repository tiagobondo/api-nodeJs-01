import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import routerIndex from './routes/index.js'

const app = express()

const path_file = fileURLToPath(import.meta.url)
const name_path = path.dirname(path_file)

app.set('views', path.join(name_path, 'views'))
app.set('view engine', 'ejs')

//use
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



//routes of my application
app.use('/', routerIndex)

export default app