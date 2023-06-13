const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const hashPassword = async (pasword) =>{
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound);
}
const comparePassword = async (password, hash) =>{
    return await bcrypt.compare(password, hash);
    // *test === $drt%tyuBfgH === true or false
}
const generarToken = (data) => {
    return jwt.sign(
        {        
            data
        },
        "firma secreta",
        {
            expiresin: '8h'
        }
    );
}
const validarToken = (token) => {
    return jwt.verify(token, "firma secreta");
}
module.exports = {
    hashPassword,
    comparePassword,
    generarToken,
    validarToken
}