const {Router} = require('express');
const router = Router();
const {userGet} = require('../controllers/user.controller');

router.get('/users', userGet);

module.exports = router;