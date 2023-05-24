const {response, request} = require('express');
const userGet = (req = request, res = response) => {
    res.send('Controlador de usuarios');
}
module.exports = {
    userGet
}