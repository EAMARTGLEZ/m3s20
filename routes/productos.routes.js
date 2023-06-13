const {Router} = require('express');
const router = Router();
const { productosGet, productosPost, productosUpdate, productosDelete } = require('../controllers/productos.controler');

router.get('/productos', productosGet);
router.post('/productos', productosPost);
router.get('/productos/:id', productosUpdate);
router.post('/prodoctos/:nombre', productosDelete);

module.exports = router;