const {Schema, model} = require('mongoose');


const productosSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    precio: {
        type: Number
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String
    },
    stock: {
        type:Number
    }
}, {vesionKey: false});

module.exports = model('productos', productosSchema);