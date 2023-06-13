const { response, request } = require("express");
const Producto = require("../models/protucto.model");
const productosGet = async (req = request, res = response) => {
    try {
        const productosLista = await Producto.find();
  
        res.status(200).json({
          msg: "Listado de productos",
          detalle: productosLista
        });
  
      } catch (error) {
        res.status(400).json({
          msg: "No se pudo listar los productos",
          detalle: error.message
        });
      }
};
const productosPost = async (req = request, res = response) => {
  try {
    // Al agregar valida que el producto no exista.....segun el name....
    const body = req.body;
    if (body === req.body) {      
      let producto = new Producto(body);
      await producto.save();
  
      res.status(201).json({
        msg: "El producto se agrego correctamente",
        detalle: producto,
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "No se pudo agregar el producto",
      detalle: error.message,
    });
  }
};
const productosUpdate = (id) => {
  db.productos.updateOne({_id:id}, { 
    $set: {stock: 50}
  });
  db.productos.find();
};
const productosDelete =  (nombre) => {
  bd.productos.deleteOne({nombre:nombre});
  db.productos.find()
};
module.exports = {
  productosGet,
  productosPost,
  productosUpdate,
  productosDelete
};
