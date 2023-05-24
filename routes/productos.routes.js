const {Router} = require('express');
const router = Router();
const { productosGet } = require('../controllers/productos.controler');

router.get('/productos', productosGet)

module.exports = router;