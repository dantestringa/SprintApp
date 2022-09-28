import express, { urlencoded } from 'express'
import 'dotenv/config'
import path from 'path'
import hbs from 'hbs'
import morgan from 'morgan'
import methodOverride from 'method-override'
import { fileURLToPath } from 'url'
import { ppid } from 'process'
import { router } from './src/routes/tareasRouter.js'
//import './src/db/conexion.js'

// Definimos la ruta __dirname ya que ES6 no lo contiene
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


//Inicio
const PORT = process.env.PORT || 4000
const app = express()

//Middlewars
app.use(morgan('common')) // 'dev' - 'combined' - 'common'
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '/public')))

// Seteamos HBS
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))
hbs.registerPartials(path.join(__dirname, 'src/views/partials'))

//Rutas
app.use(router)




app.listen(PORT, () => {
    console.log(`Aplicacion con Yarn y ES6 corriendo en el Puerto ${PORT}`);
})



