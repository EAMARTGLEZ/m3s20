const { Router } = require('express');
const router = Router();
const {usersGet, signUp} = require('../controllers/users.controller');

router.get("/usuarios", usersGet);
router.post("/signup", signUp);

module.exports = router;