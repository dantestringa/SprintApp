import mongodb from 'mongodb'
import 'dotenv/config'

const MongoClient = mongodb.MongoClient
const MONGOLOCAL = process.env.MONGOLOCAL
const MONGOATLAS = process.env.MONGOATLAS

try {
    MongoClient.connect(MONGOLOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`Base de Datos conectada a ${MONGOLOCAL}`);
} catch (error) {
    console.log(`No ha sido posible conectarse a la Base de Datos`);
}   
