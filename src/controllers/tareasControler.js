import 'dotenv/config';
import mongodb, { ObjectId } from 'mongodb';
const MongoClient = mongodb.MongoClient;


export const homeTarea = (req, res) => {
    res.render('home')
}

export const recibirTarea = (req, res) => {
    MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {
        const database = db.db(process.env.DATABASE)
        if (error) {
            console.log('Error en la conexion');
        } else{
            console.log(`Base de Datos conectada a ${database}`);
            database.collection('tareas').find({}).toArray((error, result) =>{
                if(error){
                    console.log('Error en la conexion');
                }else{
                    res.render('listaTareas', {result})
                }
            })
        }
    })
}
// Para ver en postman usar http://localhost:8080/tareas
export const postmanTarea = (req, res) => {
    MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {
        const database = db.db(process.env.DATABASE)
        if (error) {
            console.log('Error en la conexion');
        } else{
            console.log(`Base de Datos conectada a ${database}`);
            database.collection('tareas').find({}).toArray((error, result) =>{
                if(error){
                    console.log('Error en la conexion');
                }else{
                    res.json(result)
                }
            })
        }
    })
}



export const agregarTarea = (req, res) => {
    MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {
        const database = db.db(process.env.DATABASE)
        if (error) {
            console.log('Error en la conexion');
        } else{

            const {titulo, autor, descripcion, nivel} = req.body
            let dia = new Date()
            let fechaString = dia.toUTCString

            database.collection('tareas').insertOne({titulo, autor, descripcion, nivel, fecha: fechaString}, (error, result) =>{
                if(error){
                    console.log('Error en la conexion');
                }else{
                    console.log(`Dato guardado orrectamente ${JSON.stringify(req.body)}`);
                    res.render('home')
                }
            })
        }
    })
}

export const eliminarTarea = (req, res) => {
    
    MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {
        const database = db.db(process.env.DATABASE)
        if (error) {
            console.log('Error en la conexion');
        } else{

            const id = req.params.id
            const ObjectId = mongodb.ObjectId

            database.collection('tareas').deleteOne({_id: ObjectId(id)}, (error, result) =>{
                if(error){
                    console.log('Error en la conexion');
                }else{
                    console.log(`Dato eliminado`);
                    res.json(result)
                }
            })
        }
    })

}


export const tareaId = (req, res) => {
    
    MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {
        const database = db.db(process.env.DATABASE)
        if (error) {
            console.log('Error en la conexion');
        } else{

            const ObjectId = mongodb.ObjectId
            const id = req.params.id

            database.collection('tareas').findOne({_id: ObjectId(id)}, (error, result) =>{
                if(error){
                    console.log('Error en la conexion');
                }else{
                    res.json(result)
                }
            })
        }
    })

}


export const editarTarea = (req, res) => {
    
}

